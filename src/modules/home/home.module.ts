import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [CommonModule, HomeRoutingModule],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
