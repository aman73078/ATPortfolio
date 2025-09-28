import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private router: Router) {}

  viewProjects() {
    this.router.navigate(['/projects']);
  }

  contactMe() {
    this.router.navigate(['/contact']);
  }
}
