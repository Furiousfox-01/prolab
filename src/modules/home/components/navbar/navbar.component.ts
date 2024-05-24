import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  title: string = 'ProLabs';
  paraLinks: string[] = ['Product', 'Resources', 'Pricing', 'Contact us'];
  btnTxt: string[] = ['Sign in', 'Start free trail'];
}
