import { TestBed } from '@angular/core/testing';

import { ErrorsinterceptorService } from './errorsinterceptor.service';

describe('ErrorsinterceptorService', () => {
  let service: ErrorsinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorsinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
