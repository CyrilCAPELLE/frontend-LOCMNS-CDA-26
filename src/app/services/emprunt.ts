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
}