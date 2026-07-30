import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FamilleMaterielService {
  httpClient = inject(HttpClient);
  apiUrl = '/api/famille-materiel';

  getAccessibles(): Observable<FamilleMateriel[]> {
    return this.httpClient.get<FamilleMateriel[]>(this.apiUrl + '/accessibles');
  }
}