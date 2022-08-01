import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveTestComponent } from './approve-test.component';

describe('ApproveTestComponent', () => {
  let component: ApproveTestComponent;
  let fixture: ComponentFixture<ApproveTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
