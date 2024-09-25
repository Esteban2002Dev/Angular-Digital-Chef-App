import { Component } from '@angular/core';
import { RecipeCardComponent } from "../../recipes/components/recipe-card/recipe-card.component";
import { Recipe } from '../../../data/recipes/recipe';
import { NavbarComponent } from "../../../layouts/landing/components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeCardComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public recipes: Recipe[] = [
    {
      category: 'Miedo',
      description: 'asdasdas asd asd asdas dasdasd',
      ingredients: [
        'cebolla',
        'ajo'
      ],
      name: 'quesadillas de ajo y cebollla'
    },
    {
      category: 'Miedo',
      description: 'asdasdas asd asd asdas dasdasd',
      ingredients: [
        'cebolla',
        'ajo'
      ],
      name: 'quesadillas de ajo y cebollla'
    },
    {
      category: 'Miedo',
      description: 'asdasdas asd asd asdas dasdasd',
      ingredients: [
        'cebolla',
        'ajo'
      ],
      name: 'quesadillas de ajo y cebollla'
    },
  ]
}
