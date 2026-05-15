import { MaterielService } from '../../services/materiel';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-liste-materiels',
  imports: [RouterLink],
  templateUrl: './liste-materiels.html',
  styleUrl: './liste-materiels.scss',
})
export class ListeMateriels {
  materiels = signal<Materiel[]>([]);
  materielService = inject(MaterielService);

  ngOnInit() {
    this.materielService.getAll()
      .subscribe((listeMateriel) => {
        this.materiels.set(listeMateriel);
      });
  }
}
