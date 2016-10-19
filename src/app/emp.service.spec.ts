/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { EmpService } from './emp.service';

describe('Service: Emp', () => {
  beforeEach(() => {
    addProviders([EmpService]);
  });

  it('should ...',
    inject([EmpService],
      (service: EmpService) => {
        expect(service).toBeTruthy();
      }));
});
