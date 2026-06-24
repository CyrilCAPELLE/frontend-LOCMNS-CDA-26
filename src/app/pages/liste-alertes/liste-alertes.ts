import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EvenementService } from '../../services/evenement';
import { EtatService } from '../../services/etat';

@Component({
  selector: 'app-liste-alertes',
  imports: [DatePipe],
  templateUrl: './liste-alertes.html',
  styleUrl: './liste-alertes.scss',
})
export class ListeAlertes {
  etats = signal<Etat[]>([]);
  evenementService = inject(EvenementService);
  etatService = inject(EtatService);

  evenements = this.evenementService.evenements;

  dateDuJour = new Date().toISOString().slice(0, 10);
  message = signal<{ id: number; texte: string; type: 'succes' | 'erreur' } | null>(null);

  ngOnInit() {
    this.evenementService.charger();
    this.etatService.getAll().subscribe((liste) => this.etats.set(liste));
  }

  private traiter(id: number, appel: any) {
    this.message.set(null);
    appel.subscribe({
      next: () => {
        this.message.set({ id, texte: 'Événement traité', type: 'succes' });
        this.evenementService.charger();
      },
      error: (error: any) => this.message.set({ id, texte: error.error.erreur, type: 'erreur' }),
    });
  }

  marquerTraite(id: number) {
    this.traiter(id, this.evenementService.marquerTraite(id));
  }

  mettreEnMaintenance(id: number, nouvelEtatId: string) {
    this.traiter(id, this.evenementService.mettreEnMaintenance(id, Number(nouvelEtatId)));
  }

  prolonger(id: number, nouvelleDateRetour: string) {
    this.traiter(id, this.evenementService.prolonger(id, nouvelleDateRetour));
  }

  retourAnticipe(id: number, dateRetour: string, nouvelEtatId: string) {
    this.traiter(id, this.evenementService.traiterRetourAnticipe(id, dateRetour, Number(nouvelEtatId)));
  }
}
