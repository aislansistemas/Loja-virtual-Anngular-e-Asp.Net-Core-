import { TestBed, inject } from '@angular/core/testing';

import { Praticando.ServiceService } from './praticando.service.service';

describe('Praticando.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Praticando.ServiceService]
    });
  });

  it('should be created', inject([Praticando.ServiceService], (service: Praticando.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
