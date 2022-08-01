import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForm2Component } from './link-form2.component';

describe('LinkForm2Component', () => {
  let component: LinkForm2Component;
  let fixture: ComponentFixture<LinkForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
