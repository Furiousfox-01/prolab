import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectGalleryComponent,
  },
  {
    path: ':id',
    component: ProjectDetailComponent,
  },
];

@NgModule({
  declarations: [
    ProjectGalleryComponent,
    ProjectCardComponent,
    ProjectDetailComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ProjectsModule {}
