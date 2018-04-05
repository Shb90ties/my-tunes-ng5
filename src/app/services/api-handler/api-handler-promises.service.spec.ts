import { TestBed, inject } from '@angular/core/testing';

import { ApiHandlerPromisesService } from './api-handler-promises.service';

describe('ApiHandlerPromisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiHandlerPromisesService]
    });
  });

  it('should be created', inject([ApiHandlerPromisesService], (service: ApiHandlerPromisesService) => {
    expect(service).toBeTruthy();
  }));
});
