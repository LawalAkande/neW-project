import { Component, OnInit } from '@angular/core';
// import { isMainThread } from 'worker_threads';
import { CourseResponseDTO } from '../models';
// import { courseData } from './ideas-courses-data';


@Component({
  selector: 'app-ideas-courses',
  templateUrl: './ideas-courses.component.html',
  styleUrls: ['./ideas-courses.component.css']
})
export class IdeasCoursesComponent implements OnInit {
  courses: CourseResponseDTO[] = [];
  // currentDate = new Date();
  // courseData;
   courseData = [
    {
        title : 'Some title',
        date : new Date().toLocaleDateString(),
        progress : 64,
        duration : '30mins',
        score : 44,
    },
    {
        title : 'Some title',
        date : new Date().toLocaleDateString(),
        progress : 10,
        duration : '30mins',
        score : 34,
    },
    {
        title : 'Some title',
        date : new Date().toLocaleDateString(),
        progress : 50,
        duration : '30mins',
        score : 34,
    },
    {
        title : 'Some title',
        date : new Date().toLocaleDateString(),
        progress : 100,
        duration : '30mins',
        score : 34,
    },
    {
        title : 'Some title',
        date : new Date().toLocaleDateString(),
        progress : 77,
        duration : '30mins',
        score : 34,
    },
    {
        title : 'Some title',
        date : new Date().toLocaleDateString(),
        progress : 100,
        duration : '30mins',
        score : 34,
    },
    {
        title : 'Some title',
        date : new Date().toLocaleDateString(),
        progress : 56,
        duration : '30mins',
        score : 34,
    },
];

  constructor() {
  }
  ngOnInit(): void {
  }

  renderNewTab(): void {
  console.log('click me boy :(');
  }

}
