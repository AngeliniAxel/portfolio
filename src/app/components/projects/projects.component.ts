import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    { title: 'Proyecto 1', content: 'Contenido del Proyecto 1' },
    { title: 'Proyecto 2', content: 'Contenido del Proyecto 2' },
    { title: 'Proyecto 3', content: 'Contenido del Proyecto 3' },
  ];

  selectedTab = 0;

  get selectedProject() {
    return this.projects[this.selectedTab];
  }

  selectTab(index: number): void {
    this.selectedTab = index;
  }
}
