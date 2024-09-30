import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../data/recipes/interfaces/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input({required: true}) public recipe: Recipe = {
    category: '',
    description: '',
    ingredients: [],
    name: '',
    image: '',
    id: '',
    steps: []
  };
  constructor(
    private _router: Router
  ) {}

  public viewRecipe(recipeId: string) {
    this._router.navigate(['app/recipes/details', recipeId]);
  }
  
}
