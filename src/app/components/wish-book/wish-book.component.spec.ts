import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishBookComponent } from './wish-book.component';

describe('WishBookComponent', () => {
  let component: WishBookComponent;
  let fixture: ComponentFixture<WishBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
