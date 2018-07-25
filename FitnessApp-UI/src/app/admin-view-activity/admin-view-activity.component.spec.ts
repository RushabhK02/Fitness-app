import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewActivityComponent } from './admin-view-activity.component';

describe('AdminViewActivityComponent', () => {
  let component: AdminViewActivityComponent;
  let fixture: ComponentFixture<AdminViewActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
