import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForm9Component } from './link-form9.component';

describe('LinkForm9Component', () => {
  let component: LinkForm9Component;
  let fixture: ComponentFixture<LinkForm9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkForm9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkForm9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
