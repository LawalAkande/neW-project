import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  lessons;
  step = 1;
  constructor() {
   }
  ngOnInit(): void {
    this.lessons = [1, 2, 3];
  }

  next(): void{
    if (this.step > 1){
      return null;
    }
    this.step += 1;
  }

  cancel(): void {
    if (this.step === 1){
      return null;
    }
    this.step -= 1;
  }
}
