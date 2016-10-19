export class Emp {
    id:number;
    name:string;
    status:boolean=true;
    salary:number

    constructor(id:number,name:string,status:boolean,salary:number) {
    this.id=id;
    this.name=name;
    this.salary=salary;
    this.status=status;
  }
}
