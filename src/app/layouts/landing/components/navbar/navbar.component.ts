import { Component } from '@angular/core';

interface Route {
  name: string;
  path: string;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
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