import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySalaryComponent } from './display-salary.component';

describe('DisplaySalaryComponent', () => {
  let component: DisplaySalaryComponent;
  let fixture: ComponentFixture<DisplaySalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
