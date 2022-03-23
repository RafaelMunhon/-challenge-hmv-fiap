import { TestBed } from '@angular/core/testing';

import { TriagemService } from './triagem.service';

describe('TriagemService', () => {
  let service: TriagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
