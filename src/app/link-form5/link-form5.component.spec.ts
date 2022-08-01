import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForm5Component } from './link-form5.component';

describe('LinkForm5Component', () => {
  let component: LinkForm5Component;
  let fixture: ComponentFixture<LinkForm5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkForm5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkForm5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
