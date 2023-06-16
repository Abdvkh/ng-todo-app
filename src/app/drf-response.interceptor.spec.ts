import { TestBed } from '@angular/core/testing';

import { DrfResponseInterceptor } from './drf-response.interceptor';

describe('DrfResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DrfResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DrfResponseInterceptor = TestBed.inject(DrfResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
