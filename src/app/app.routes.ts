import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Page404 } from './pages/page404/page404';
import { Connexion } from './pages/connexion/connexion';
import { DetailComposant } from './pages/detail-composant/detail-composant';
import { ModifierComposant } from './pages/modifier-composant/modifier-composant';
import { DetailMateriel } from './pages/detail-materiel/detail-materiel';
import { ListePersonnes } from './pages/liste-personnes/liste-personnes';
import { DetailPersonne } from './pages/detail-personne/detail-personne';

export const routes: Routes = [
    {path: 'accueil', component: Accueil },
    {path: 'connexion', component: Connexion },
    {path: 'composant/creer', component: ModifierComposant },
    {path: 'composant/:id', component: DetailComposant },
    {path: 'materiel/:id', component: DetailMateriel },
    {path: 'personne/liste', component: ListePersonnes },
    {path: 'personne/:id', component: DetailPersonne },
    {path: 'composant/maj/:id', component: ModifierComposant },
    {path: '', redirectTo: '/accueil', pathMatch: 'full' },
    {path: '**', component: Page404 },
];
