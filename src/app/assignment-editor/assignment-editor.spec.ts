import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentEditor } from './assignment-editor';

describe('AssignmentEditor', () => {
  let component: AssignmentEditor;
  let fixture: ComponentFixture<AssignmentEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentEditor],
    }).compileComponents();

    fixture = TestBed.createComponent(AssignmentEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
