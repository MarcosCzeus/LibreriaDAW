import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresRegisterComponent } from './autores-register.component';

describe('AutoresRegisterComponent', () => {
  let component: AutoresRegisterComponent;
  let fixture: ComponentFixture<AutoresRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
