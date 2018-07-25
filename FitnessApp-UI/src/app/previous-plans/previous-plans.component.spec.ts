import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPlansComponent } from './previous-plans.component';

describe('PreviousPlansComponent', () => {
  let component: PreviousPlansComponent;
  let fixture: ComponentFixture<PreviousPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
