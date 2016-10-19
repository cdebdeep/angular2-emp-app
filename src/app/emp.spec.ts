/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Emp} from './emp';

describe('Emp', () => {
  it('should create an instance', () => {
    expect(new Emp(1,'debdeep',true,1000)).toBeTruthy();
  });
});
