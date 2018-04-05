import { TestBed, inject } from '@angular/core/testing';

import { ApiHandlerObservablesService } from './api-handler-observables.service';

describe('ApiHandlerObservablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiHandlerObservablesService]
    });
  });

  it('should be created', inject([ApiHandlerObservablesService], (service: ApiHandlerObservablesService) => {
    expect(service).toBeTruthy();
  }));
});
