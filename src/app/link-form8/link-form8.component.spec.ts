import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForm8Component } from './link-form8.component';

describe('LinkForm8Component', () => {
  let component: LinkForm8Component;
  let fixture: ComponentFixture<LinkForm8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkForm8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkForm8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
