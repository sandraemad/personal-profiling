import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../Navbar/navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {}
