import { TestBed } from '@angular/core/testing';

import { TweetsServiceService } from './tweets-service.service';

describe('TweetsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TweetsServiceService = TestBed.get(TweetsServiceService);
    expect(service).toBeTruthy();
  });
});
