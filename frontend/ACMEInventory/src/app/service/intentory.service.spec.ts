import { TestBed } from '@angular/core/testing';

import { IntentoryService } from './intentory.service';

describe('IntentoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntentoryService = TestBed.get(IntentoryService);
    expect(service).toBeTruthy();
  });
});
