import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForm6Component } from './link-form6.component';

describe('LinkForm6Component', () => {
  let component: LinkForm6Component;
  let fixture: ComponentFixture<LinkForm6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkForm6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkForm6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
