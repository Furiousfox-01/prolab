import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FieldComponent } from './components/field/field.component';
@NgModule({
  declarations: [LoginComponent, LoginCardComponent, ForgotPasswordComponent, FieldComponent],
  imports: [CommonModule, LoginRoutingModule],
  bootstrap: [LoginComponent],
})
export class LoginModule {}
