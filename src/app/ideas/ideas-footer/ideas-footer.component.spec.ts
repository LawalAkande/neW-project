import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasFooterComponent } from './ideas-footer.component';

describe('IdeasFooterComponent', () => {
  let component: IdeasFooterComponent;
  let fixture: ComponentFixture<IdeasFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeasFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
