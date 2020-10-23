import { courseData } from './../ideas-courses/ideas-courses-data';
import { CourseResponseDTO } from './../models';
import { IdeasHeaderComponent } from '../ideas-header/ideas-header.component';
import { IdeasFooterComponent } from '../ideas-footer/ideas-footer.component';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';






@Component({
  selector: 'app-ideas-home',
  templateUrl: './ideas-home.component.html',
  styleUrls: ['./ideas-home.component.css']
})
export class IdeasHomeComponent implements OnInit {
  courses: CourseResponseDTO[] = [];
  learningPaths: any[] = [];
  recentDiscussions: any[] = [];
  tables;
  userName = 'Lawal';

  courseData = [
    {
      courseTitle: 'Anti-fraud and Anti-Bribery  and corruption Policy',
      started: new Date(),
      due: new Date(),
      progress: 75
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.recentDiscussions = [1, 2, 3];
    this.tables = [1, 2];
  }

}
