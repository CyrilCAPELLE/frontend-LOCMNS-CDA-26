import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth";

export const connecteGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const roles = authService.jwtInfo()?.roles;

    if (!roles || 
        (!roles.includes('ADMIN') && 
        !roles.includes('COLLABORATEUR') && 
        !roles.includes('STAGIAIRE') && 
        !roles.includes('INTERVENANT'))
    ) {
        return router.parseUrl('/connexion');
    }

    return true;
}