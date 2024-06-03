import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
naviToProjects() {
  this.router.navigate(['/project'])

}

  constructor(private router:Router){}
naviToProfile() {
this.router.navigate(['/profile'])
}

}
