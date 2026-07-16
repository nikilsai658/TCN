import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vedios } from './vedios';

describe('Vedios', () => {
  let component: Vedios;
  let fixture: ComponentFixture<Vedios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vedios],
    }).compileComponents();

    fixture = TestBed.createComponent(Vedios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
