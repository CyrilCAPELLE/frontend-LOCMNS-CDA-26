import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

type JwtInfo = { id: number; sub: string; roles: string };

@Injectable({ providedIn: 'root' })
export class AuthService {
  jwtInfo = signal<JwtInfo | null>(null);
  httpClient = inject(HttpClient);

  constructor() {
    this.decodeJwt();
  }

  login(credentials: { email: string; motDePasse: string }) {
    return this.httpClient
      .post(`${environment.serverUrl}/login`, credentials, { responseType: 'text' })
      .pipe(tap((jwt) => {
        localStorage.setItem('jwt', jwt);
        this.decodeJwt();
      }));
  }

  logout() {
    localStorage.removeItem('jwt');
    this.jwtInfo.set(null);
  }

  decodeJwt() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const body = JSON.parse(atob(jwt.split('.')[1]));
      this.jwtInfo.set(body);
    }
  }

  isAdmin() {
    return this.jwtInfo()?.roles.includes('ADMIN') ?? false;
  }

  getId() {
    return this.jwtInfo()?.id ?? null;
  }
}