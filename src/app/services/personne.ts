import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  httpClient = inject(HttpClient)
  apiUrl = 'http://localhost:8080/personne';

  getAll(): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(this.apiUrl + '/liste');
  }

  listerAdministrateurs(): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(this.apiUrl + '/liste-admin');
  }

  getById(id: number): Observable<Personne> {
    return this.httpClient.get<Personne>(this.apiUrl + '/' + id)
  }

  create(personne: Personne): Observable<Personne> {
    return this.httpClient.post<Personne>(this.apiUrl, personne)
  }

  update(id: number, personne: Personne): Observable<void> {
    return this.httpClient.put<void>(this.apiUrl + '/' + id, personne)
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/' + id)
  }
}
