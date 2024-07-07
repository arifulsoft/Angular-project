import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchwaisedoctorComponent } from './branchwaisedoctor.component';

describe('BranchwaisedoctorComponent', () => {
  let component: BranchwaisedoctorComponent;
  let fixture: ComponentFixture<BranchwaisedoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchwaisedoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchwaisedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
