import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasLoginComponent } from './ideas-login.component';

describe('IdeasLoginComponent', () => {
  let component: IdeasLoginComponent;
  let fixture: ComponentFixture<IdeasLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeasLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
