import { Component } from '@angular/core';
import { NavbarComponent } from "../../../layouts/landing/components/navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../data/recipes/interfaces/recipe';
import { fakeRecipes } from '../../../data/recipes/fakeData';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  public recipe?: Recipe;
  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(
      (params: any) => {
        this.recipe = fakeRecipes.find(recipe => recipe.id === params.id);
    })
  }
}
