import { Component } from '@angular/core';


interface ProfileEditable {
  profileName: string;
  role: string;
  about: string;
  skills: string[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isModalOpen: boolean =false;
  constructor() {}



   profile: ProfileEditable = {
    profileName: 'Ria Malfin',
    role: 'Full Stack Developer',
    about: `Hello! I'm Ria Malfin, a dedicated Full Stack Web Developer specializing
    in the MERN stack, With expertise in React.js, Node.js, Express ja, and
    MongoDB, I craft dynamic and user-friendly web applications. Passionate
    about problem-solving and staying updated with the latest trends, I
    thrive on delivering high-quality solutions. Let's build something
    amazing together!`,
    skills: [
      'HTML/CSS',
      'JavaScript',
      'React.js',
      'Node.js',
      'Python',
      'Angular',
    ]
  };

  
  profileName: string = 'Ria Malfin';
  role: string = 'Full Stack Developer';

  About: string = `        Hello! I'm Ria Malfin, a dedicated Full Stack Web Developer specializing
  in the MERN stack, With expertise in React.js, Node.js, Express ja, and
  MongoDB, I craft dynamic and user-friendly web applications. Passionate
  about problem-solving and staying updated with the latest trends, I
  thrive on delivering high-quality solutions. Let's build something
  amazing together!`;

  skills: string[] = [
    'HTML/CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Python',
    'Angular',
  ];
  
  profileDetails: string[][] = [
    ['Project Count', '20'],
    ['Language', 'React'],
    ['Project created', '5'],
    ['popularity', '4th Grade'],
    ['Role', 'Member'],
    ['collaborators', '2'],
  ];


  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  updateProfile(updatedProfile: any) {
    console.log(updatedProfile);
    this.isModalOpen = false;
  }
}
