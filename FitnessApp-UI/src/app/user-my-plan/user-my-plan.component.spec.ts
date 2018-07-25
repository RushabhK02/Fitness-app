import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyPlanComponent } from './user-my-plan.component';

describe('UserMyPlanComponent', () => {
  let component: UserMyPlanComponent;
  let fixture: ComponentFixture<UserMyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
