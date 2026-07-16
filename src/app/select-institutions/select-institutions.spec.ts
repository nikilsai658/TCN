import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInstitutions } from './select-institutions';

describe('SelectInstitutions', () => {
  let component: SelectInstitutions;
  let fixture: ComponentFixture<SelectInstitutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectInstitutions],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectInstitutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
