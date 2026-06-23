import { Component, inject, signal } from '@angular/core';
import { EmpruntService } from '../../services/emprunt';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth';
import { EtatService } from '../../services/etat';

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
  etats = signal<Etat[]>([]);

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
}
