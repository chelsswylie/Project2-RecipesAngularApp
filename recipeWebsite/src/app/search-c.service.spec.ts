import { TestBed } from '@angular/core/testing';

import { SearchCService } from './search-c.service';

describe('SearchCService', () => {
  let service: SearchCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
