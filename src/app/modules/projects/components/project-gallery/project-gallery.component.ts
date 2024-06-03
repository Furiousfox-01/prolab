import { Component, inject } from '@angular/core';
import { ProjectDataService } from '../../../../core/services/project-data.service';
import { projectDataModel } from '../../../../core/models/project';

import { Router } from '@angular/router';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.scss',
})
export class ProjectGalleryComponent {
  projectCardData: projectDataModel[] = [];

  private projectData = inject(ProjectDataService);
  constructor(private router: Router) {}

  ngOnInit() {
    this.projectCardData = this.projectData.getData();
  }

  navigateToProject() {
    this.router.navigate(['project/1']);
  }
}
