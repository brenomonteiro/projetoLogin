/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LivrosService } from './livros.service';

describe('LivrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivrosService]
    });
  });

  it('should ...', inject([LivrosService], (service: LivrosService) => {
    expect(service).toBeTruthy();
  }));
});
