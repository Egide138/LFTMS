import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMnagerDashboardComponent } from './lab-mnager-dashboard.component';

describe('LabMnagerDashboardComponent', () => {
  let component: LabMnagerDashboardComponent;
  let fixture: ComponentFixture<LabMnagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabMnagerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabMnagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
