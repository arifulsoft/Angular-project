import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarchComponent } from './scarch.component';

describe('ScarchComponent', () => {
  let component: ScarchComponent;
  let fixture: ComponentFixture<ScarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScarchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
