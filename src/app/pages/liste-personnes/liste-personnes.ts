import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-liste-personnes',
  imports: [],
  templateUrl: './liste-personnes.html',
  styleUrl: './liste-personnes.scss',
})
export class ListePersonnes {
  personnes = signal<Personne[]>([])
  httpClient = inject(HttpClient)
  
  ngOnInit() {
    this.httpClient
    .get<Personne[]>('http://localhost:8080/personne/liste')
      .subscribe((listePersonne) => {
        this.personnes.set(listePersonne);
      });
  }
}
