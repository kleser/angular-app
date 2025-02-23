import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEightComponent } from './task-eight.component';

describe('TaskEightComponent', () => {
  let component: TaskEightComponent;
  let fixture: ComponentFixture<TaskEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
