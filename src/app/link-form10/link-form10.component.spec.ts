import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForm10Component } from './link-form10.component';

describe('LinkForm10Component', () => {
  let component: LinkForm10Component;
  let fixture: ComponentFixture<LinkForm10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkForm10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkForm10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
