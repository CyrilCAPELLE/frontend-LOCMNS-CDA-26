import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  composants = signal<Composant[]>([]);

  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient
      .get<Composant[]>('http://localhost:8080/composant/liste')
      .subscribe((listeComposants) => {
        this.composants.set(listeComposants);
      });
    console.log('fin');
  }
}
