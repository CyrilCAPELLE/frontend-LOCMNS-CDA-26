import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-liste-utilisateurs',
  imports: [RouterLink],
  templateUrl: './liste-utilisateurs.html',
  styleUrl: './liste-utilisateurs.scss',
})
export class ListeUtilisateurs {
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
