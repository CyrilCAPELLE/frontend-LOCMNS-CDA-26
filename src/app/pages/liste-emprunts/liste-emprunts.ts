import { Component, inject, signal } from '@angular/core';
import { EmpruntService } from '../../services/emprunt';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-liste-emprunts',
  imports: [DatePipe],
  templateUrl: './liste-emprunts.html',
  styleUrl: './liste-emprunts.scss',
})
export class ListeEmprunts {
  emprunts = signal<Emprunt[]>([]);
  empruntService = inject(EmpruntService);
  authService = inject(AuthService);

  ngOnInit() {
    if (this.authService.isAdmin()) {
      this.empruntService.getAll().subscribe((ListeEmprunts) => {
        this.emprunts.set(ListeEmprunts);
    });
    } else {
      const id = this.authService.getId();
      if (id !== null) {
        this.empruntService.getMesDemandes(id).subscribe((liste) => {
          this.emprunts.set(liste);
        });
      }
    }
    
  }

}
