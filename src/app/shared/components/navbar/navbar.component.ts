import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  title: string = 'ProLab';
  paraLinks: string[] = ['Product', 'Resources', 'Pricing', 'Contact us'];
  btnTxt: string[] = ['Sign in', 'Start free trail'];


  constructor(private router: Router) {}

  navigateTo():void {
    this.router.navigate(['login']);
  }

}
