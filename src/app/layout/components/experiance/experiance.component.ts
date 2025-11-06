import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// --- INTERFACES ---
interface Position {
  title: string;
  duration: string;
  responsibilities: string[];
}

interface Experience {
  company: string;
  role: string; // Latest/Current Role for quick view
  duration: string; // Total duration at the company
  location: string;
  icon: string; // Emoji or image path (e.g., 'images/company_logo.png')
  current: boolean;
  positions: Position[]; // Array to hold promotion history
}

@Component({
  selector: 'app-experiance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiance.component.html',
  styleUrl: './experiance.component.scss'
})
export class ExperianceComponent implements OnInit {
  experienceList: Experience[] = [
    {
      company: 'Stellar Innovations Private Limited',
      role: 'Software Engineer', // Current Role (Highest title for summary)
      duration: 'Sep 2024 – Present (1 yr 3 mos)', 
      location: 'Bengaluru, Karnataka, India',
      icon: 'images/stellar.png', 
      current: true,
      
      positions: [
        {
          title: 'Software Engineer', // CURRENT ROLE
          duration: 'Nov 2025 – Present', 
          responsibilities: [
            // High-Impact, Senior Responsibilities
            'Led the successful **migration and consolidation** of four application repositories into a single codebase, significantly minimizing technical debt.',
            'Implemented extensive **post-production code optimization** and performance tuning after migration, achieving a **30% reduction** in critical production bugs.',
            'Architected and deployed a **new UI** with **Dynamic Validation** capabilities, enabling field-level checks and justified bypass functionality.',
            'Resolved critical performance issues, including **page unresponsiveness and memory leaks** by effectively managing browser memory release.',
            'Enforced stringent **code optimization** across both **frontend and backend systems** for improved maintainability and scalability.',
          ]
        },
        {
            title: 'Junior Software Engineer', // PREVIOUS ROLE
            duration: 'Sep 2024 – Nov 2025', 
            responsibilities: [
                'Contributed to the development of over 10 core reusable components for internal tools.',
                'Assisted in integrating RESTful APIs and managed application state for new features.',
                'Performed rigorous unit testing and quality assurance on assigned modules.',
                'Collaborated with senior developers on defining and adhering to coding standards.'
            ]
        }
      ]
    },
    // Add any previous employment entries here
  ];

  constructor() {}
  ngOnInit(): void {}
}