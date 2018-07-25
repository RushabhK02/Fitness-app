import { TestBed, inject } from '@angular/core/testing';

import { UserDataStorageService } from './user-data-storage.service';

describe('UserDataStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataStorageService]
    });
  });

  it('should be created', inject([UserDataStorageService], (service: UserDataStorageService) => {
    expect(service).toBeTruthy();
  }));
});
