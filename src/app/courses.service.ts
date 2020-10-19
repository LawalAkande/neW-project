import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  // tslint:disable-next-line: typedef
  getSelectedLesson() {
    return ['Lesson1', 'Lesson2', 'Lesson3'];
  }
}
