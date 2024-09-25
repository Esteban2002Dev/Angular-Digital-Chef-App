import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
    {
        path: 'home',
        loadComponent: () => import ('../../features/landing/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
