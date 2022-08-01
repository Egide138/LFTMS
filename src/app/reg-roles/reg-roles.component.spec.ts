import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegRolesComponent } from './reg-roles.component';

describe('RegRolesComponent', () => {
  let component: RegRolesComponent;
  let fixture: ComponentFixture<RegRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
