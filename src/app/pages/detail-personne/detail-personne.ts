import { HttpClient } from '@angular/common/http';
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
  httpClient = inject(HttpClient)
  personne = signal<Personne | null>(null)

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.httpClient.get<Personne>('http://localhost:8080/personne/' + params['id'])
      .subscribe((personne) => {
        this.personne.set(personne);
      });
    });
  }
}
