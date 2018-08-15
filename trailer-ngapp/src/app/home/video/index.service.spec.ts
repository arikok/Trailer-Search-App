import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from '@app/core';

import { IndexService } from './index.service';

describe('IndexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      providers: [IndexService]
    });
  });

  it(
    'should be created',
    inject([IndexService], (service: IndexService) => {
      expect(service).toBeTruthy();
    })
  );
});
