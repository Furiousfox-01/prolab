import { Component, Input } from '@angular/core';
import { projectDataModel } from '../../../../core/models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input()
  projectData!: projectDataModel;


}
