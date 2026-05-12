import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MaterielService {
  httpClient = inject(HttpClient)
  apiUrl = 'http://localhost:8080/materiel';

  getAll(): Observable<Materiel[]> {
    return this.httpClient.get<Materiel[]>(this.apiUrl + '/liste');
  }

  getById(id: number): Observable<Materiel> {
    return this.httpClient.get<Materiel>(this.apiUrl + '/' + id)
  }

  create(materiel: Materiel): Observable<Materiel> {
    return this.httpClient.post<Materiel>(this.apiUrl, materiel)
  }

  update(id: number, materiel: Materiel): Observable<void> {
    return this.httpClient.put<void>(this.apiUrl + '/' + id, materiel)
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/' + id)
  }
}
