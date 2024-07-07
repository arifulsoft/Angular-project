import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalserviceComponent } from './hospitalservice.component';

describe('HospitalserviceComponent', () => {
  let component: HospitalserviceComponent;
  let fixture: ComponentFixture<HospitalserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
