import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishBookRegisterComponent } from './wish-book-register.component';

describe('WishBookRegisterComponent', () => {
  let component: WishBookRegisterComponent;
  let fixture: ComponentFixture<WishBookRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishBookRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishBookRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
