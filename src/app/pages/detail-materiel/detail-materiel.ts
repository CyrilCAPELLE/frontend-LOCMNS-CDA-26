import { MaterielService } from '../../services/materiel';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth';
import { EtatService } from '../../services/etat';

@Component({
  selector: 'app-detail-materiel',
  imports: [],
  templateUrl: './detail-materiel.html',
  styleUrl: './detail-materiel.scss',
})
export class DetailMateriel {
  route = inject(ActivatedRoute)
  materielService = inject(MaterielService)
  authService = inject(AuthService)
  etatService = inject(EtatService)

  materiel = signal<Materiel | null>(null)
  etats = signal<Etat[]>([])
  message = signal<{ texte: string; type: 'succes' | 'erreur' } | null>(null)

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.charger(+params['id']);
    });
    if (this.authService.isAdmin()) {
      this.etatService.getAll().subscribe((liste) => this.etats.set(liste));
    }
  }

  charger(id: number) {
    this.materielService.getById(id).subscribe((materiel) => this.materiel.set(materiel));
  }

  changerEtat(nouvelEtatId: string) {
    const materiel = this.materiel();
    if (!materiel) {
      return;
    }
    this.message.set(null);
    this.materielService.changerEtat(materiel.id, Number(nouvelEtatId)).subscribe({
      next: (maj) => {
        this.materiel.set(maj);
        this.message.set({ texte: 'État mis à jour', type: 'succes' });
      },
      error: (error) => this.message.set({ texte: error.error.erreur, type: 'erreur' }),
    });
  }
}
