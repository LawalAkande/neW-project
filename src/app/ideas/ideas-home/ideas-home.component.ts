import { courseData } from './../ideas-courses/ideas-courses-data';
import { CourseResponseDTO } from './../models';
import { IdeasHeaderComponent } from '../ideas-header/ideas-header.component';
import { IdeasFooterComponent } from '../ideas-footer/ideas-footer.component';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ideas-home',
  templateUrl: './ideas-home.component.html',
  styleUrls: ['./ideas-home.component.css']
})
export class IdeasHomeComponent implements OnInit {
  courses: CourseResponseDTO[] = [];
  learningPaths: any[] = [];
  recentDiscussions: any[] = [];

  courseData = [
    {
      courseTitle: 'Anti-fraud and Anti-Bribery  and corruption Policy',
      started: new Date().toLocaleDateString(),
      due: new Date().toLocaleDateString(),
      progress: 75
    },
    {
      courseTitle: 'Information Communication Tecnhology (ICT) Policy for Users',
      started: new Date().toLocaleDateString(),
      due: new Date().toLocaleDateString(),
      progress: 34
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.recentDiscussions = [1, 2, 3];
  }

}
