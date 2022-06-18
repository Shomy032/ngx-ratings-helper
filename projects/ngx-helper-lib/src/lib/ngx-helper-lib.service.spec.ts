import { TestBed } from '@angular/core/testing';

import { NgxHelperLibService } from './ngx-helper-lib.service';

describe('NgxHelperLibService', () => {
  let service: NgxHelperLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHelperLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
