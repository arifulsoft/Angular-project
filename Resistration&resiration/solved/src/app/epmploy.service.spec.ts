import { TestBed } from '@angular/core/testing';

import { EpmployService } from './epmploy.service';

describe('EpmployService', () => {
  let service: EpmployService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpmployService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
