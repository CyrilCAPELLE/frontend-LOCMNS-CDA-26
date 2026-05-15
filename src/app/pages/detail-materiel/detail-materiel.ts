import { MaterielService } from '../../services/materiel';
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
  materielService = inject(MaterielService)
  materiel = signal<Materiel | null>(null)

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.materielService.getById(+params['id'])
      .subscribe((materiel) => {
        this.materiel.set(materiel);
      });
    });
  }
}
