import { TestBed, inject } from '@angular/core/testing';

import { AdminDataStorageService } from './admin-data-storage.service';

describe('AdminDataStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDataStorageService]
    });
  });

  it('should be created', inject([AdminDataStorageService], (service: AdminDataStorageService) => {
    expect(service).toBeTruthy();
  }));
});
