import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
    {
        path: 'home',
        loadComponent: () => import ('../../features/landing/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about-us',
        loadComponent: () => import('../../features/landing/about-us/about-us.component').then(m => m.AboutUsComponent)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
