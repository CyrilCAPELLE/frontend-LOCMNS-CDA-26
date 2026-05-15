import { PersonneService } from '../../services/personne';
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
  personneService = inject(PersonneService)
  
  ngOnInit() {
    this.personneService.getAll()
      .subscribe((listePersonne) => {
        this.personnes.set(listePersonne);
      });
  }
}
