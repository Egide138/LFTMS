import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForm3Component } from './link-form3.component';

describe('LinkForm3Component', () => {
  let component: LinkForm3Component;
  let fixture: ComponentFixture<LinkForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkForm3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
