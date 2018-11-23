import { TestBed } from '@angular/core/testing';

import { StoreUtilsService } from './store-utils.service';

describe('StoreUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreUtilsService = TestBed.get(StoreUtilsService);
    expect(service).toBeTruthy();
  });
});
