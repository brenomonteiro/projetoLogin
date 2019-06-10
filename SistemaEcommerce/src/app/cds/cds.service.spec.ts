/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CdsService } from './cds.service';

describe('CdsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CdsService]
    });
  });

  it('should ...', inject([CdsService], (service: CdsService) => {
    expect(service).toBeTruthy();
  }));
});
