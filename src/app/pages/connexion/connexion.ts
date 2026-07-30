import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-connexion',
  imports: [ReactiveFormsModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.scss',
})
export class Connexion {
  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  erreur = '';

  formulaire = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    motDePasse: ['', [Validators.required]],
  });

  onConnexion() {
    if (this.formulaire.valid) {
      this.authService
        .login(this.formulaire.value as { email: string; motDePasse: string })
        .subscribe({
          next: () => this.router.navigateByUrl('/dashboard'),
          error: () => (this.erreur = 'Email ou mot de passe incorrect'),
        });
    }
  }
}
