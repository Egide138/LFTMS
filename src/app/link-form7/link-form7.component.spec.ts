import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForm7Component } from './link-form7.component';

describe('LinkForm7Component', () => {
  let component: LinkForm7Component;
  let fixture: ComponentFixture<LinkForm7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkForm7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkForm7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
