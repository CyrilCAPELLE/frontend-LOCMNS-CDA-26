import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EtatService {
  httpClient = inject(HttpClient);
  apiUrl = 'http://localhost:8080/etat';

  getAll(): Observable<Etat[]> {
    return this.httpClient.get<Etat[]>(this.apiUrl + '/liste');
  }

  enregistrerRetour(id: number, dateRetour: string, nouvelEtatId: number): Observable<Emprunt> {
  return this.httpClient.put<Emprunt>(
    this.apiUrl + '/' + id + '/retour', {}, { params: { dateRetour, nouvelEtatId } }
  );
}
}