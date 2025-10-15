import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Feastio (Food App)',
      description:
        'A sleek food delivery app built with Angular and SCSS, featuring a modern UI and interactive cart system.',
      image: 'images/feastio.png',
      demoUrl: 'https://aman73078.github.io/Feastio/overview/home',
      repoUrl: 'https://github.com/aman73078/Feastio',
    },
    {
      title: 'TimeSync Pro',
      description:
        'A time tracking web app built with Angular and localStorage, designed to log work hours, track productivity, and display user-specific time data.',
      image: 'images/timesyncpro.png', // replace with your actual screenshot path
      demoUrl: 'https://aman73078.github.io/TimeSync-Pro/',
      repoUrl: 'https://github.com/aman73078/TimeSync-Pro', // update if different or remove
    },
    {
      title: 'QueueCut (Salon App)',
      description:
        'A modern salon booking app with a smooth UI for managing appointments and real-time queue tracking.',
      image: 'images/queue-cut.png', // replace with your actual image path
      demoUrl: 'https://aman73078.github.io/QueueCut/', // update if different
      repoUrl: 'https://github.com/aman73078/QueueCut',
    },
    {
      title: 'SKY-WORLD',
      description:
        'A static landing site built with plain HTML and CSS, showcasing a clean, responsive layout and visual design.',
      image: 'images/skyworld.png', // replace with your screenshot path
      demoUrl: 'https://aman73078.github.io/SKY-WORLD/',
      repoUrl: 'https://github.com/aman73078/SKY-WORLD', // update if different or remove
    },
  ];
}
