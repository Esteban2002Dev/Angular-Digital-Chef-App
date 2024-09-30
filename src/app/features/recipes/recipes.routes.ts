import { Routes } from '@angular/router';

export const recipesRoutes: Routes = [
    {
        path: 'details/:id',
        loadComponent: () => import ('./recipe-details/recipe-details.component').then(m => m.RecipeDetailsComponent)
    },
    {
        path: '**',
        redirectTo: 'details'
    }
];
