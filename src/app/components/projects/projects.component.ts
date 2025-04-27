import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'projects',
  imports: [TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Blog Angular',
      technologies: ['Angular', 'Bootstrap'],
      description: 'Projects.blog',
      githubLink: 'https://github.com/AngeliniAxel/Blog-Angular',
    },
    {
      title: 'Portfolio',
      technologies: ['Angular', 'Bootstrap'],
      description: 'Projects.portfolio',
      githubLink: 'https://github.com/AngeliniAxel/portfolio',
    },
    {
      title: 'Ecommerce App',
      technologies: ['React', 'Express.js', 'PostgreSQL'],
      description: 'Projects.ecommerce',
      githubLink: 'https://github.com/AngeliniAxel/ecommerceApp',
    },
    {
      title: 'Login Register',
      technologies: ['React', 'Express.js', 'PostgreSQL'],
      description: 'Projects.login',
      githubLink: 'https://github.com/AngeliniAxel/login-register-template',
    },
    {
      title: 'CV',
      technologies: ['React', 'Bootstrap'],
      description: 'Projects.cv',
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
