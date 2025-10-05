import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certification',
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.scss'
})
export class CertificationComponent {
  certifications = [
    {
      title: 'Google Cloud Certification',
      org: 'Google Cloud',
      issued: 'October 2025',
      id: 'UW42HQGCMLZH',
      link: 'https://www.coursera.org/account/accomplishments/verify/UW42HQGCMLZH',
      image: 'certification/Google_Cloud.png',
    },
    {
      title: 'Angular 17',
      org: 'Coursera',
      issued: 'September 2025',
      id: 'QAUER6LIPGQ5',
      link: 'https://www.coursera.org/account/accomplishments/verify/QAUER6LIPGQ5',
      image: 'certification/Angular_Basic.png',
    },
    {
      title: 'Foundations: Data, Data, Everywhere',
      org: 'Google',
      issued: 'October 2025',
      id: '85WI5U0157OB',
      link: 'https://www.coursera.org/account/accomplishments/verify/85WI5U0157OB',
      image: 'certification/Foundation_Data_Analyst.png',
    },
    {
      title: 'Excel Mastery Course',
      org: 'CoursePe',
      issued: 'April 2024',
      id: 'SQ21T01',
      link: 'https://www.coursera.org/account/accomplishments/verify/85WI5U0157OB',
      image: 'certification/excel.png',
    },
  ];

  visibleCerts: any[] = [];
  currentIndex = 0;
  @ViewChild('content') content!: TemplateRef<any>;
  constructor(private ngbModal: NgbModal) {}
  ngOnInit() {
  }

  open() {
    this.ngbModal.open(this.content, {
      size: 'lg',
    });
  }
}
