import {Employee, EmployeeHead} from "./employee"
import { Injectable } from '@angular/core';

@Injectable()
export class FactoryEmployee
{
    public Create(empType:string):Employee
    {
        if (empType == "HOD") {
          return new EmployeeHead();
        }
        else {
           return new Employee();
        }
    }
}
