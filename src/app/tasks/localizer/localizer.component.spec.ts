import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizerComponent } from './localizer.component';

describe('LocalizerComponent', () => {
  let component: LocalizerComponent;
  let fixture: ComponentFixture<LocalizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
