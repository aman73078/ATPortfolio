import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  imports: [CommonModule,RouterLink],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'angular', desc: 'Robust front-end framework for building SPAs' },
    { name: 'NestJS', icon: 'nestjs', desc: 'Progressive Node.js framework for backend APIs' },
    { name: 'MySQL', icon: 'database', desc: 'Relational database management system' },
    { name: 'Formly Forms', icon: 'form', desc: 'Dynamic form generation library for Angular' },
    { name: 'JavaScript / TypeScript', icon: 'code', desc: 'Core languages for frontend & backend development' },
    { name: 'HTML', icon: 'html5', desc: 'Markup language for structuring web pages' },
    { name: 'CSS', icon: 'css3', desc: 'Styling language for web design' },
    { name: 'Bootstrap', icon: 'bootstrap', desc: 'Popular CSS framework for responsive UI' },
    { name: 'Postman', icon: 'postman', desc: 'API testing and development tool' },
  ];

  otherSkills = [
  { name: 'Python', icon: 'python', desc: 'Versatile programming language for data and backend development' },
  { name: 'Excel', icon: 'excel', desc: 'Powerful tool for data analysis and visualization' },
  { name: 'Power BI', icon: 'chart', desc: 'Business analytics tool for interactive reports and dashboards' },
  { name: 'MongoDB', icon: 'mongodb', desc: 'NoSQL database for scalable and flexible data storage' },
];


  getIconClass(icon: string): string {
  const iconMap: { [key: string]: string } = {
    angular: 'fab fa-angular',
    nestjs: 'fas fa-server',
    database: 'fas fa-database',
    form: 'fas fa-file-alt',
    code: 'fas fa-code',
    html5: 'fab fa-html5',
    css3: 'fab fa-css3-alt',
    bootstrap: 'fab fa-bootstrap',
    postman: 'fas fa-envelope-open-text',
    python: 'fab fa-python',
    excel: 'fas fa-table',
    chart: 'fas fa-chart-bar',
    mongodb: 'fas fa-leaf'
  };
  return iconMap[icon] || 'fas fa-tools';
}


}
