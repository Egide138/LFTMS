import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTDAManagerDashboardComponent } from './rtda-manager-dashboard.component';

describe('RTDAManagerDashboardComponent', () => {
  let component: RTDAManagerDashboardComponent;
  let fixture: ComponentFixture<RTDAManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTDAManagerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTDAManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
