import { TestBed } from '@angular/core/testing';

import { AutGuardService } from './aut-guard.service';

describe('AutGuardService', () => {
  let service: AutGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
