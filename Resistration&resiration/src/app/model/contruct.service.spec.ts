import { TestBed } from '@angular/core/testing';

import { ContructService } from './contruct.service';

describe('ContructService', () => {
  let service: ContructService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContructService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
