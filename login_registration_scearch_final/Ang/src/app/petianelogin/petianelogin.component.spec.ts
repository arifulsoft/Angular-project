import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetianeloginComponent } from './petianelogin.component';

describe('PetianeloginComponent', () => {
  let component: PetianeloginComponent;
  let fixture: ComponentFixture<PetianeloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetianeloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetianeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
