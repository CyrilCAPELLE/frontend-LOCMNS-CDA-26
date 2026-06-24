import { Component, inject, signal } from '@angular/core';
import { EmpruntService } from '../../services/emprunt';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth';
import { EtatService } from '../../services/etat';
import { EvenementService } from '../../services/evenement';

@Component({
  selector: 'app-liste-emprunts',
  imports: [DatePipe],
  templateUrl: './liste-emprunts.html',
  styleUrl: './liste-emprunts.scss',
})
export class ListeEmprunts {
  emprunts = signal<Emprunt[]>([]);
  empruntService = inject(EmpruntService);
  authService = inject(AuthService);
  etatService = inject(EtatService);
  evenementService = inject(EvenementService);
  etats = signal<Etat[]>([]);
  typesEvenement = ['PANNE', 'DYSFONCTIONNEMENT', 'RETOUR_ANTICIPE', 'PROLONGATION'];

  dateDuJour = new Date().toISOString().slice(0, 10);
  message = signal<{ id: number; texte: string; type: 'succes' | 'erreur' } | null>(null);

  ngOnInit() {
    this.charger();
    if (this.authService.isAdmin()) {
      this.etatService.getAll().subscribe((liste) => this.etats.set(liste));
    }
  }

  charger() {
    if (this.authService.isAdmin()) {
      this.empruntService.getAll().subscribe((liste) => this.emprunts.set(liste));
    } else {
      const id = this.authService.getId();
      if (id !== null) {
        this.empruntService.getMesDemandes(id).subscribe((liste) => this.emprunts.set(liste));
      }
    }
  }

  retour(id: number, dateRetour: string, nouvelEtatId: string) {
  this.message.set(null);
  this.empruntService.enregistrerRetour(id, dateRetour, Number(nouvelEtatId)).subscribe({
    next: () => {
      this.message.set({ id, texte: 'Retour enregistré', type: 'succes' });
      this.charger();
    },
    error: (error) => this.message.set({ id, texte: error.error.erreur, type: 'erreur' }),
  });
}

  signaler(id: number, typeEvenement: string, libelleEvenement: string) {
    this.message.set(null);
    this.evenementService.signaler(id, typeEvenement, libelleEvenement).subscribe({
      next: () => this.message.set({ id, texte: 'Événement signalé', type: 'succes' }),
      error: (error) => this.message.set({ id, texte: error.error.erreur, type: 'erreur' }),
    });
  }
}
