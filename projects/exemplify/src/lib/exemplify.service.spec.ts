import { TestBed, inject } from '@angular/core/testing';

import { ExemplifyService } from './exemplify.service';

describe('ExemplifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExemplifyService]
    });
  });

  it('should be created', inject([ExemplifyService], (service: ExemplifyService) => {
    expect(service).toBeTruthy();
  }));
});
