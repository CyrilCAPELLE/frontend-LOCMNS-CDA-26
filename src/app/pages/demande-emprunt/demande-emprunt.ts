import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-demande-emprunt',
  imports: [ReactiveFormsModule],
  templateUrl: './demande-emprunt.html',
  styleUrl: './demande-emprunt.scss',
})
export class DemandeEmprunt {

  formBuilder = inject(FormBuilder)

  formulaire = this.formBuilder.group({
    famille: ['', [Validators.required]],
    materiel: ['', [Validators.required]],
    dateDebut: ['', [Validators.required]],
    dateRetour: ['', [Validators.required]],
    motif: [''],
  },
  {validators: dateRetourValide});

  onSubmit() {
    if (this.formulaire.valid) {
      console.log(this.formulaire.value);
    }
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

