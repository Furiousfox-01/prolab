import { Component } from '@angular/core';



interface Member {
  name: string;
  role: string;
}

interface Task {
  task_name: string;
  task_status: string;
  task_start_date: string;
  task_end_date: string;
}

interface Project {
  project_name: string;
  project_description: string;
  project_type: string;
  project_status: string;
  project_duration: string;
  project_members: Member[];
  project_tasks: Task[];
}


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

  project: Project = {
    project_name: 'Smart Home Automation',
    project_description: 'This project aims to develop a smart home automation system using IoT devices and machine learning algorithms.',
    project_type: 'IoT and Machine Learning',
    project_status: 'In Progress',
    project_duration: '6 months',
    project_members: [
      { name: 'John Doe', role: 'Project Lead' },
      { name: 'Jane Smith', role: 'Software Engineer' },
      { name: 'Bob Johnson', role: 'Hardware Engineer' }
    ],
    project_tasks: [
      { task_name: 'Design and Development of IoT Devices', task_status: 'In Progress', task_start_date: '2024-05-01', task_end_date: '2024-06-30' },
      { task_name: 'Development of Machine Learning Algorithms', task_status: 'In Progress', task_start_date: '2024-05-01', task_end_date: '2024-07-31' },
      { task_name: 'Integration of IoT Devices and Machine Learning Algorithms', task_status: 'Not Started', task_start_date: '2024-07-01', task_end_date: '2024-08-31' }
    ]
  };
}
