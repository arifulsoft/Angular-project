import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnasticserviceComponent } from './diagnasticservice.component';

describe('DiagnasticserviceComponent', () => {
  let component: DiagnasticserviceComponent;
  let fixture: ComponentFixture<DiagnasticserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnasticserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnasticserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
