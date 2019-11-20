/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouteGuard } from './route-guard.service';

describe('Service: RouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGuard]
    });
  });

  it('should ...', inject([RouteGuard], (service: RouteGuard) => {
    expect(service).toBeTruthy();
  }));
});
