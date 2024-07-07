import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctornameComponent } from './doctorname.component';

describe('DoctornameComponent', () => {
  let component: DoctornameComponent;
  let fixture: ComponentFixture<DoctornameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctornameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctornameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
