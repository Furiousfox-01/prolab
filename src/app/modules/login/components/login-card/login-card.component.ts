import { Component } from '@angular/core';

interface loginModel {
  name: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.scss',
})
export class LoginCardComponent {
  activeCreate: boolean = false;
  activePassword: boolean = false;

  constructor() {}

  btnTxt: string[] = ['next', 'submit'];
  field: string[] = [
    'name',
    'email',
    'password',
    'confirm password',
    'Remember',
  ];

  f_type: string[] = ['text', 'checkbox'];

  loginData: loginModel = {
    password: '',
    email: '',
    name: '',
  };

  toggleActive() {
    this.activeCreate = !this.activeCreate;
  }
  togglePassword(): void {
    this.activePassword = !this.activePassword;
  }
}
