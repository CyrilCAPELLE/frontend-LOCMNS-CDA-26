import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { EvenementService } from '../../services/evenement';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  authService = inject(AuthService);
  evenementService = inject(EvenementService);
  router = inject(Router);

  ngOnInit() {
    if (this.authService.isAdmin()) {
      this.evenementService.charger();
    }
  }

  deconnexion() {
    this.authService.logout();
    this.router.navigateByUrl('/connexion');
  }

}
