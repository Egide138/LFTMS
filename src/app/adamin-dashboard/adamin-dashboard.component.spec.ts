import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaminDashboardComponent } from './adamin-dashboard.component';

describe('AdaminDashboardComponent', () => {
  let component: AdaminDashboardComponent;
  let fixture: ComponentFixture<AdaminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
