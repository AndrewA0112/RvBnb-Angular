/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserControlService } from './user.service';

describe('Service: UserControl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserControlService]
    });
  });

  it('should ...', inject([UserControlService], (service: UserControlService) => {
    expect(service).toBeTruthy();
  }));
});
