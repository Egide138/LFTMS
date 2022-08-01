import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForm4Component } from './link-form4.component';

describe('LinkForm4Component', () => {
  let component: LinkForm4Component;
  let fixture: ComponentFixture<LinkForm4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkForm4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
