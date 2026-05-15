import { PersonneService } from '../../services/personne';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-liste-personnes',
  imports: [RouterLink],
  templateUrl: './liste-personnes.html',
  styleUrl: './liste-personnes.scss',
})
export class ListePersonnes {
  personnes = signal<Personne[]>([])
  personneService = inject(PersonneService)
  
  ngOnInit() {
    this.personneService.getAll()
      .subscribe((listePersonne) => {
        this.personnes.set(listePersonne);
      });
  }
}
