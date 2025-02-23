import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTenComponent } from './task-ten.component';

describe('TaskTenComponent', () => {
  let component: TaskTenComponent;
  let fixture: ComponentFixture<TaskTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
