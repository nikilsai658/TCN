import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDash } from './course-dash';

describe('CourseDash', () => {
  let component: CourseDash;
  let fixture: ComponentFixture<CourseDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDash],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
