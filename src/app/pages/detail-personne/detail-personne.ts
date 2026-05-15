import { PersonneService } from '../../services/personne';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-personne',
  imports: [],
  templateUrl: './detail-personne.html',
  styleUrl: './detail-personne.scss',
})
export class DetailPersonne {
  route = inject(ActivatedRoute)
  personneService = inject(PersonneService)
  personne = signal<Personne | null>(null)

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.personneService.getById(+params['id'])
      .subscribe((personne) => {
        this.personne.set(personne);
      });
    });
  }
}
