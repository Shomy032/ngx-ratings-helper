import { TestBed } from '@angular/core/testing';

import { RatingsHelperService } from './ratings-helper.service';

describe('RatingsHelperService', () => {
  let service: RatingsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
