import { Component } from '@angular/core';
import { RecipeCardComponent } from "../../recipes/components/recipe-card/recipe-card.component";
import { Recipe } from '../../../data/recipes/interfaces/recipe';
import { NavbarComponent } from "../../../layouts/landing/components/navbar/navbar.component";
import { fakeRecipes } from '../../../data/recipes/fakeData';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeCardComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public recipes = fakeRecipes;
}
