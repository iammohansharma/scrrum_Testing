import { TestBed } from '@angular/core/testing';

import { MokeserviceService } from './mokeservice.service';

describe('MokeserviceService', () => {
  let service: MokeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MokeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
