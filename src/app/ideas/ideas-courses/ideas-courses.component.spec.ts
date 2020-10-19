import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasCoursesComponent } from './ideas-courses.component';

describe('IdeasCoursesComponent', () => {
  let component: IdeasCoursesComponent;
  let fixture: ComponentFixture<IdeasCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeasCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
