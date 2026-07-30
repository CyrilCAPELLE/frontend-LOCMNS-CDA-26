import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComposantService {
  httpClient = inject(HttpClient)
  apiUrl = '/api/composant';

  getAll(): Observable<Composant[]> {
    return this.httpClient.get<Composant[]>(this.apiUrl + '/liste');
  }

  getById(id: number): Observable<Composant> {
    return this.httpClient.get<Composant>(this.apiUrl + '/' + id)
  }

  create(composant: Composant): Observable<Composant> {
    return this.httpClient.post<Composant>(this.apiUrl, composant)
  }

  update(id: number, composant: Composant): Observable<void> {
    return this.httpClient.put<void>(this.apiUrl + '/' + id, composant)
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/' + id)
  }
}
