import { TestBed } from '@angular/core/testing';

import { PraticienService } from './praticien.service';

describe('PraticienService', () => {
  let service: PraticienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PraticienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
