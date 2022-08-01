import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsRTDAComponent } from './records-rtda.component';

describe('RecordsRTDAComponent', () => {
  let component: RecordsRTDAComponent;
  let fixture: ComponentFixture<RecordsRTDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsRTDAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsRTDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
