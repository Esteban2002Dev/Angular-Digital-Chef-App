import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'app',
        loadComponent: () => import('./layouts/landing/main/main.component').then(m => m.MainComponent),
        children: [
            {
                path: 'land',
                loadChildren: () => import('./layouts/landing/main.routes').then((m) => m.mainRoutes),
            },
            {
                path: '**',
                redirectTo: 'land'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'app'
    }
];
