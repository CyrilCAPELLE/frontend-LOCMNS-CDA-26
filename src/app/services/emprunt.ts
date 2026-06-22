import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpruntService {
  httpClient = inject(HttpClient)
  apiUrl = 'http://localhost:8080/emprunt';

  getAll(): Observable<Emprunt[]> {
    return this.httpClient.get<Emprunt[]>(this.apiUrl + '/liste');
  }

  creerDemande(demande: { materiel: { id: number }; dateDebut: string; dateRetourPrevue: string }): Observable<Emprunt> {
    return this.httpClient.post<Emprunt>(this.apiUrl + '/demande', demande);
  }

  valider(id: number): Observable<Emprunt> {
    return this.httpClient.put<Emprunt>(this.apiUrl + '/' + id + '/valider', {});
  }

  refuser(id: number): Observable<Emprunt> {
    return this.httpClient.put<Emprunt>(this.apiUrl + '/' + id + '/refuser', {});
  }

  getMesDemandes(personneId: number): Observable<Emprunt[]> {
    return this.httpClient.get<Emprunt[]>(this.apiUrl + '/personne/' + personneId);
  }
}