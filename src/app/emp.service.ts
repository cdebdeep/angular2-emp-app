import { Injectable } from '@angular/core';
import { Emp } from './emp';

@Injectable()
export class EmpService {

  lastId: number = 0;

  empCollection: Emp[] = [];

  constructor() {

  }

  addEmp(emp:Emp):EmpService{
    if(!emp.id){
      emp.id=++this.lastId;
      return this;
    }
  }

  getEmpAll():Emp[]{
    return this.empCollection;
  }

}
