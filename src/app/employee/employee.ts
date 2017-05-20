
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
        //vaildation rules established here
        this.EmployeeFormValidator = _builder.group({ // <-- the parent FormGroup
            Name: ['', Validators.required],
            MobileNo: ['', Validators.pattern("[0-9]")],
            Id: ['', Validators.compose([Validators.required,
            Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$")])],
            Department: ''
        })
    }
    //custom validations to throw error based on the name of the control sent
    IsDirty(controlname: string): boolean {
        if (controlname == undefined) {
            return this.EmployeeFormValidator.dirty;
        }
        else {
            return (this.EmployeeFormValidator.
                controls[controlname].dirty);
        }

    }
   //custom validations to throw error based on the name of the control and type of validation sent
    IsValid(controlname: string, typeofvalidation: string): boolean {
        if (controlname == undefined) {
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