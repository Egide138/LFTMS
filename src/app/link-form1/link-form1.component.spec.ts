import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForm1Component } from './link-form1.component';

describe('LinkForm1Component', () => {
  let component: LinkForm1Component;
  let fixture: ComponentFixture<LinkForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
