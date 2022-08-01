import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTechnicianComponent } from './report-technician.component';

describe('ReportTechnicianComponent', () => {
  let component: ReportTechnicianComponent;
  let fixture: ComponentFixture<ReportTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTechnicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
