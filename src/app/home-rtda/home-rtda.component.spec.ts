import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRTDAComponent } from './home-rtda.component';

describe('HomeRTDAComponent', () => {
  let component: HomeRTDAComponent;
  let fixture: ComponentFixture<HomeRTDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRTDAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRTDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
