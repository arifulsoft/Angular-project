import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForntComponent } from './fornt.component';

describe('ForntComponent', () => {
  let component: ForntComponent;
  let fixture: ComponentFixture<ForntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
