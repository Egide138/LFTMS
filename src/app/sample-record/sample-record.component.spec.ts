import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRecordComponent } from './sample-record.component';

describe('SampleRecordComponent', () => {
  let component: SampleRecordComponent;
  let fixture: ComponentFixture<SampleRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
