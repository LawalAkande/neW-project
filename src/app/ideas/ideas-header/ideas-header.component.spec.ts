import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasHeaderComponent } from './ideas-header.component';

describe('IdeasHeaderComponent', () => {
  let component: IdeasHeaderComponent;
  let fixture: ComponentFixture<IdeasHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeasHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
