import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Route {
  name: string;
  path: string;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  
  constructor() {}

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}