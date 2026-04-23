import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-accueil',
  imports: [RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  materiels = signal<Materiel[]>([]);

  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient
      .get<Materiel[]>('http://localhost:8080/materiel/liste')
      .subscribe((listeMateriel) => {
        this.materiels.set(listeMateriel);
      });
      
    console.log('fin');
  }
}
