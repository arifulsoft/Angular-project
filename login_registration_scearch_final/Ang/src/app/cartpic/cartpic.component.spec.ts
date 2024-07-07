import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpicComponent } from './cartpic.component';

describe('CartpicComponent', () => {
  let component: CartpicComponent;
  let fixture: ComponentFixture<CartpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartpicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
