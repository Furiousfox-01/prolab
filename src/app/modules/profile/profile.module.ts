import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSlideComponent } from '../../shared/components/project-slide/project-slide.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent, ProjectSlideComponent, EditProfileComponent],
  imports: [CommonModule,RouterModule.forChild(routes),SharedModule, FormsModule],
})
export class ProfileModule {}
