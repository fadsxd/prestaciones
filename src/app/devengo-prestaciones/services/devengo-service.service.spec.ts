import { TestBed } from '@angular/core/testing';

import { DevengoServiceService } from './devengo-service.service';

describe('DevengoServiceService', () => {
  let service: DevengoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevengoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
