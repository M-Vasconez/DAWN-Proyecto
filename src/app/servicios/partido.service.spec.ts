import { TestBed } from '@angular/core/testing';

import { PartidoService } from './partido.service';

describe('JuegoService', () => {
  let service: PartidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
