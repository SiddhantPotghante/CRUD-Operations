import { TestBed, inject } from '@angular/core/testing';

import { PocDbService } from './poc-db.service';

describe('PocDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PocDbService]
    });
  });

  it('should be created', inject([PocDbService], (service: PocDbService) => {
    expect(service).toBeTruthy();
  }));
});
