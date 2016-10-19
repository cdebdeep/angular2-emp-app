/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { EmpAppComponent } from './emp-app.component';

describe('Component: EmpApp', () => {
  it('should create an instance', () => {
    let component = new EmpAppComponent();
    expect(component).toBeTruthy();
  });
});
