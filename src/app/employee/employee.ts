
import {NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms'
export class Employee {
    public Name: String = "" ;
    public MobileNo: string = "";
    public Id: string = "";
    public Department: string = "";
    public EmpType:string ="EMP";
    IsValid():boolean
    {
        if(this.Name.length == 0)
        {
            return false;
        }
       
        return true;
    }

}
export class EmployeeHead extends Employee {

    public EmpType:string ="HOD";
    IsValid():boolean
    {
        if(this.Department.length == 0)
        {
            return false;
        }
       
        return true;
    }

}