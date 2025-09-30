import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my work and skills, built with Angular and SCSS.',
      image: 'images/insights.png',
      demoUrl: 'https://your-portfolio-demo.com',
      repoUrl: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'Task Manager App',
      description: 'A productivity app for managing daily tasks with real-time collaboration features.',
      image: 'images/report-pana.png',
      demoUrl: 'https://taskmanager.demo.com',
      repoUrl: 'https://github.com/yourusername/task-manager',
    },
    // Add more projects as needed
  ];
}
