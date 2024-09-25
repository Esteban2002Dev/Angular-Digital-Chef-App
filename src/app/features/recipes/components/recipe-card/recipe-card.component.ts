import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../data/recipes/recipe';

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
    name: ''
  };
  constructor() {}

  
}
