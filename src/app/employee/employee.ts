
import {
    NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms'
export class Employee {
    public Name: String = "";
    public MobileNo: string = "";
    public Id: string = "";
    public Department: string = "";
    public EmpType: string = "EMP";
    public EmployeeFormValidator: FormGroup = null;

    constructor() {
        var _builder = new FormBuilder();
        this.EmployeeFormValidator = _builder.group({ // <-- the parent FormGroup
            Name: ['', Validators.required],
            MobileNo: ['', Validators.pattern("[0-9]")],
            Id: ['',  Validators.compose([Validators.required,
                                Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$")])],
            Department: ''
        })
    }
    IsDirty(controlname:string): boolean {
        if (controlname == undefined) {
            return this.EmployeeFormValidator.dirty;
        }
        else {
            return (this.EmployeeFormValidator.
                controls[controlname].dirty);
        }

    }
    IsValid(controlname:string, typeofvalidation:string): boolean {
             if (controlname==undefined) {
            return this.EmployeeFormValidator.valid;
        }
        else {
            return (!this.EmployeeFormValidator.
                controls[controlname].hasError(typeofvalidation));
        }

    }
}
export class EmployeeHead extends Employee {

    public EmpType: string = "HOD";
    IsValid(): boolean {
        if (this.Department.length == 0) {
            return false;
        }

        return true;
    }

}