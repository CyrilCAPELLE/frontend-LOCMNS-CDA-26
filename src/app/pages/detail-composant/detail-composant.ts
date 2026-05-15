import { ComposantService } from '../../services/composant';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-composant',
  imports: [],
  templateUrl: './detail-composant.html',
  styleUrl: './detail-composant.scss',
})
export class DetailComposant {
  route = inject(ActivatedRoute)
  composantService = inject(ComposantService)
  composant = signal<Composant | null>(null)

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.composantService.getById(+params['id'])
      .subscribe((composant) => {
        this.composant.set(composant);
      });
    });
  }
}
