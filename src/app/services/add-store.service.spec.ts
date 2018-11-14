import { TestBed } from '@angular/core/testing';

import { AddStoreService } from './add-store.service';

describe('AddStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddStoreService = TestBed.get(AddStoreService);
    expect(service).toBeTruthy();
  });
});
