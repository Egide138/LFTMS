import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserApprovedComponent } from './home-user-approved.component';

describe('HomeUserApprovedComponent', () => {
  let component: HomeUserApprovedComponent;
  let fixture: ComponentFixture<HomeUserApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUserApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
