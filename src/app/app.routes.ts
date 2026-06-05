import { Routes } from '@angular/router';
import { Page404 } from './pages/page404/page404';
import { Connexion } from './pages/connexion/connexion';
import { DetailComposant } from './pages/detail-composant/detail-composant';
import { ModifierComposant } from './pages/modifier-composant/modifier-composant';
import { DetailMateriel } from './pages/detail-materiel/detail-materiel';
import { ListePersonnes } from './pages/liste-personnes/liste-personnes';
import { DetailPersonne } from './pages/detail-personne/detail-personne';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { ListeMateriels } from './pages/liste-materiels/liste-materiels';
import { ListeEmprunts } from './pages/liste-emprunts/liste-emprunts';
import { Planning } from './pages/planning/planning';
import { ListeUtilisateurs } from './pages/liste-utilisateurs/liste-utilisateurs';
import { ListeDocuments } from './pages/liste-documents/liste-documents';
import { ListeAlertes } from './pages/liste-alertes/liste-alertes';
import { DemandeEmprunt } from './pages/demande-emprunt/demande-emprunt';
import { connecteGuard } from './guard/connecte-guard';

export const routes: Routes = [
    {path: 'connexion', component: Connexion },
    {path: '', component: MainLayout, canActivate: [connecteGuard],
        children: [ 
            {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            {path: 'composant/creer', component: ModifierComposant },
            {path: 'composant/:id', component: DetailComposant },
            {path: 'materiel/:id', component: DetailMateriel },
            {path: 'personne/liste', component: ListePersonnes },
            {path: 'personne/:id', component: DetailPersonne },
            {path: 'composant/maj/:id', component: ModifierComposant },
            {path: 'dashboard', component: Dashboard},
            {path: 'materiels', component: ListeMateriels},
            {path: 'emprunts', component: ListeEmprunts},
            {path: 'planning', component: Planning},
            {path: 'utilisateurs', component: ListeUtilisateurs},
            {path: 'documents', component: ListeDocuments},
            {path: 'alertes', component: ListeAlertes},
            {path: 'emprunts/demande', component: DemandeEmprunt},
        ]
    },
    {path: '**', component: Page404 },
];
