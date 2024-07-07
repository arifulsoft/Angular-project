import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalthmagaginComponent } from './halthmagagin.component';

describe('HalthmagaginComponent', () => {
  let component: HalthmagaginComponent;
  let fixture: ComponentFixture<HalthmagaginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalthmagaginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalthmagaginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
