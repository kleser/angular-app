import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSixComponent } from './task-six.component';

describe('TaskSixComponent', () => {
  let component: TaskSixComponent;
  let fixture: ComponentFixture<TaskSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
