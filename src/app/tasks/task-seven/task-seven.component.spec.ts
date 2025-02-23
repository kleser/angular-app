import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSevenComponent } from './task-seven.component';

describe('TaskSevenComponent', () => {
  let component: TaskSevenComponent;
  let fixture: ComponentFixture<TaskSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
