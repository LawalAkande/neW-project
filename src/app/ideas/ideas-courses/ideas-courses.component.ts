import { Component, OnInit } from '@angular/core';
import { CourseResponseDTO } from '../models';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';





@Component({
  selector: 'app-ideas-courses',
  templateUrl: './ideas-courses.component.html',
  styleUrls: ['./ideas-courses.component.css']
})
export class IdeasCoursesComponent implements OnInit {
  courses: CourseResponseDTO[] = [];
   courseData = [
    {
        title : 'Code of Conduct',
        date : new Date().toLocaleDateString(),
        progress : 64,
        duration : '40 Mins',
    },
    {
        title : 'Plan International of Nigeria Personel Manual',
        date : new Date().toLocaleDateString(),
        progress : 10,
        duration : '32 Mins',
    },
    {
        title : 'Anti-fraud Anti Bribry and Corruption',
        date : new Date().toLocaleDateString(),
        progress : 50,
        duration : '26 Mins',
    },
    {
        title : 'Global Health and Safety',
        date : new Date().toLocaleDateString(),
        progress : 100,
        duration : '40 Mins',
        score : '92%',
    },
    {
        title : 'Child Protection',
        date : new Date().toLocaleDateString(),
        progress : 77,
        duration : '32 Mins',
        score : '71%',
    },
    {
        title : 'Information Communication and Technology (ICT) Policy for...',
        date : new Date().toLocaleDateString(),
        progress : 100,
        duration : '13 Mins',
        score : '80%',
    },
    {
        title : 'Harassment, Bullying & Discrimination',
        date : new Date().toLocaleDateString(),
        progress : 56,
        duration : '26 Mins',
    },
];

  constructor() {
  }
  ngOnInit(): void {
  }

  renderNewTab(): void {
  console.log('click me boy');
  }

}
