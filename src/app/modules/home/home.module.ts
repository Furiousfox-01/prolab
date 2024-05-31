import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

import { SharedModule } from '../../shared/shared.module';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [HomeComponent, BodyComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
'./navbar.component.html'