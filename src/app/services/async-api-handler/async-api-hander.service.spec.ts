import { TestBed, inject } from '@angular/core/testing';

import { AsyncApiHanderService } from './async-api-hander.service';

describe('AsyncApiHanderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncApiHanderService]
    });
  });

  it('should be created', inject([AsyncApiHanderService], (service: AsyncApiHanderService) => {
    expect(service).toBeTruthy();
  }));
});
