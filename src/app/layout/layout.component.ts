import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  navOpen = false;
  isDarkMode = false;

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  closeNav() {
    this.navOpen = false;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    const body = document.body;
    body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
