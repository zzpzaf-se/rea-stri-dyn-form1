import { TestBed } from '@angular/core/testing';

import { DynComponentFormElementService } from './dyn-component-form-element.service';

describe('DynComponentFormElementService', () => {
  let service: DynComponentFormElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynComponentFormElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
