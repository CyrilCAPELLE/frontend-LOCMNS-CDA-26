import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FamilleMaterielService } from '../../services/famille-materiel';
import { MaterielService } from '../../services/materiel';
import { EmpruntService } from '../../services/emprunt';

@Component({
  selector: 'app-demande-emprunt',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './demande-emprunt.html',
  styleUrl: './demande-emprunt.scss',
})
export class DemandeEmprunt {

  formBuilder = inject(FormBuilder)
  familleService = inject(FamilleMaterielService);
  familles = signal<FamilleMateriel[]>([]);
  materielService = inject(MaterielService);
  materiels = signal<Materiel[]>([]);
  empruntService = inject(EmpruntService);
  router = inject(Router);

  formulaire = this.formBuilder.group({
    famille: ['', [Validators.required]],
    materiel: ['', [Validators.required]],
    dateDebut: ['', [Validators.required]],
    dateRetour: ['', [Validators.required]],
    motif: [''],
  },
  {validators: dateRetourValide});

  ngOnInit() {
    this.familleService.getAccessibles().subscribe((familles) => {
      this.familles.set(familles);
    });

    this.materielService.getAll().subscribe((materiels) => {
      this.materiels.set(materiels);
    })

  }

  onSubmit() {
  if (this.formulaire.valid) {
    const valeurs = this.formulaire.value;
    this.empruntService.creerDemande({
      materiel: { id: Number(valeurs.materiel) },
      dateDebut: valeurs.dateDebut!,
      dateRetourPrevue: valeurs.dateRetour!,
    }).subscribe({
      next: () => this.router.navigateByUrl('/emprunts'),
      error: () => alert("La demande n'a pas pu être envoyée"),
    });
  }
}

  materielFiltres() {
    const familleId = this.formulaire.controls.famille.value;

    return this.materiels().filter((materiel) => String(materiel.familleMateriel?.id) === String(familleId)
    );
  }

}

function dateRetourValide(group: AbstractControl): ValidationErrors | null {

  const debut = group.get('dateDebut')?.value;
  const retour = group.get('dateRetour')?.value;

  if (!debut || !retour) return null;

  if (new Date(retour) <= new Date(debut)) {
    return {
      dateRetourInvalide: true
    };
  }
  return null;
}

