import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from '@app/core';

import { VideoService } from './video.service';

describe('VideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      providers: [VideoService]
    });
  });

  it(
    'should be created',
    inject([VideoService], (service: VideoService) => {
      expect(service).toBeTruthy();
    })
  );
});
