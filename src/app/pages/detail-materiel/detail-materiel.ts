import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-materiel',
  imports: [],
  templateUrl: './detail-materiel.html',
  styleUrl: './detail-materiel.scss',
})
export class DetailMateriel {
  route = inject(ActivatedRoute)
  httpClient = inject(HttpClient)
  materiel = signal<Materiel | null>(null)

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.httpClient.get<Materiel>('http://localhost:8080/materiel/' + params['id'])
      .subscribe((materiel) => {
        this.materiel.set(materiel);
      });
    });
  }
}
