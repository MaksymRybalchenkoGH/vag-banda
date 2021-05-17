import { TestBed } from '@angular/core/testing';

import { AllowedCarBrandsGuard } from './allowed-car-brands.guard';

describe('AllowedCarBrandsGuard', () => {
  let guard: AllowedCarBrandsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowedCarBrandsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
