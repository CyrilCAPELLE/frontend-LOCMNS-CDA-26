import { Component, computed, inject, signal } from '@angular/core';
import { EmpruntService } from '../../services/emprunt';
import { AuthService } from '../../services/auth';
import { MaterielService } from '../../services/materiel';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  emprunts = signal<Emprunt[]>([]);
  empruntService = inject(EmpruntService);
  authService = inject(AuthService);
  materiels = signal<Materiel[]>([]);
  materielService = inject(MaterielService);

  ngOnInit() {
    if (this.authService.isAdmin()) {
      this.chargerEmprunts();
      this.chargerMateriel();
    }        
  }

  chargerEmprunts() {
    this.empruntService.getAll().subscribe((liste) => {
      this.emprunts.set(liste);
    })
  }

  chargerMateriel() {
    this.materielService.getAll().subscribe((liste) => {
      this.materiels.set(liste);
    })  
  }

  accepter(id: number) {
    this.empruntService.valider(id).subscribe(() => {
      this.chargerEmprunts();
    })
  }

  refuser(id: number) {
    this.empruntService.refuser(id).subscribe(() => {
      this.chargerEmprunts();
    })
  }

  totalMateriel = computed(() => this.materiels().length);
  empruntActif = computed(() => this.emprunts().filter((emprunt) => emprunt.statutDemande === 'VALIDEE').length);
  enMaintenance = computed(() => this.materiels().filter((materiel) => materiel.etat?.libelleEtat === 'En réparation').length);
  disponible = computed(() => this.materiels().filter((materiels) => materiels.etat?.libelleEtat === 'Neuf' || materiels.etat?.libelleEtat === 'Bon état').length);
}
