import { TestBed, async, inject } from '@angular/core/testing';

import { AdminTypeGuard } from './admin-type.guard';

describe('AdminTypeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminTypeGuard]
    });
  });

  it('should ...', inject([AdminTypeGuard], (guard: AdminTypeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
