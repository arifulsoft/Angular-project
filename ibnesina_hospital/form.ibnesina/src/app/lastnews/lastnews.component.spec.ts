import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastnewsComponent } from './lastnews.component';

describe('LastnewsComponent', () => {
  let component: LastnewsComponent;
  let fixture: ComponentFixture<LastnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
