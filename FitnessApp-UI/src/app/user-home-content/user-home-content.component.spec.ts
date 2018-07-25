import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeContentComponent } from './user-home-content.component';

describe('UserHomeContentComponent', () => {
  let component: UserHomeContentComponent;
  let fixture: ComponentFixture<UserHomeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
