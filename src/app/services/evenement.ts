import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EvenementService {
  httpClient = inject(HttpClient);
  apiUrl = 'http://localhost:8080/evenement';

  evenements = signal<Evenement[]>([]);
  nombreAlertes = computed(() => this.evenements().filter((evenement) => !evenement.traite).length);

  charger() {
    this.getAll().subscribe((liste) => this.evenements.set(liste));
  }

  getAll(): Observable<Evenement[]> {
    return this.httpClient.get<Evenement[]>(this.apiUrl + '/liste');
  }

  signaler(empruntId: number, typeEvenement: string, libelleEvenement: string): Observable<Evenement> {
    return this.httpClient.post<Evenement>(
      this.apiUrl + '/signaler',
      {},
      { params: { empruntId, typeEvenement, libelleEvenement } }
    );
  }

  marquerTraite(id: number): Observable<Evenement> {
    return this.httpClient.put<Evenement>(this.apiUrl + '/' + id + '/traiter', {});
  }

  mettreEnMaintenance(id: number, nouvelEtatId: number): Observable<Evenement> {
    return this.httpClient.put<Evenement>(this.apiUrl + '/' + id + '/maintenance', {}, { params: { nouvelEtatId } });
  }

  prolonger(id: number, nouvelleDateRetour: string): Observable<Evenement> {
    return this.httpClient.put<Evenement>(this.apiUrl + '/' + id + '/prolonger', {}, { params: { nouvelleDateRetour } });
  }

  traiterRetourAnticipe(id: number, dateRetour: string, nouvelEtatId: number): Observable<Evenement> {
    return this.httpClient.put<Evenement>(this.apiUrl + '/' + id + '/retour-anticipe', {}, { params: { dateRetour, nouvelEtatId } });
  }
}
