import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNineComponent } from './task-nine.component';

describe('TaskNineComponent', () => {
  let component: TaskNineComponent;
  let fixture: ComponentFixture<TaskNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
