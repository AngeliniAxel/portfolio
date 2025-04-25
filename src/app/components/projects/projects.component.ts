import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Blog Angular',
      technologies: ['Angular', 'Bootstrap'],
      description: 'Contenido del Proyecto 1',
      githubLink: 'https://github.com/AngeliniAxel/Blog-Angular',
    },
    {
      title: 'Portfolio',
      technologies: ['Angular', 'Bootstrap'],
      description: 'Contenido del Proyecto 2',
      githubLink: 'https://github.com/AngeliniAxel/portfolio',
    },
    {
      title: 'Ecommerce App',
      technologies: ['React', 'Express.js', 'PostgreSQL'],
      description: 'Contenido del Proyecto 2',
      githubLink: 'https://github.com/AngeliniAxel/ecommerceApp',
    },
    {
      title: 'Login Register',
      technologies: ['React', 'Express.js', 'PostgreSQL'],
      description: 'Contenido del Proyecto 2',
      githubLink: 'https://github.com/AngeliniAxel/login-register-template',
    },
    {
      title: 'CV',
      technologies: ['React', 'Bootstrap'],
      description: 'Contenido del Proyecto 2',
      githubLink: 'https://github.com/AngeliniAxel/cv',
    },
  ];

  selectedTab = 0;

  get selectedProject() {
    return this.projects[this.selectedTab];
  }

  selectTab(index: number): void {
    this.selectedTab = index;
  }
}
