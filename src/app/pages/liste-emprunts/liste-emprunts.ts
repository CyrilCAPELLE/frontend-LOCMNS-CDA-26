import { Component, inject, signal } from '@angular/core';
import { EmpruntService } from '../../services/emprunt';

@Component({
  selector: 'app-liste-emprunts',
  imports: [],
  templateUrl: './liste-emprunts.html',
  styleUrl: './liste-emprunts.scss',
})
export class ListeEmprunts {
  emprunts = signal<Emprunt[]>([]);
  empruntService = inject(EmpruntService);

  ngOnInit() {
    this.empruntService.getAll().subscribe((ListeEmprunts) => {
      this.emprunts.set(ListeEmprunts);
    });
  }

}
