
import { Employee } from "./employee"
import { FactoryEmployee } from "./factory.employee"
import { Component } from "@angular/core"
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: "emloyee-UI",
    templateUrl: "./app/employee/employee.component.html"
})
export class EmployeeComponent {
    currentEmployee: Employee = null;
    employees: Array<Employee> = new Array<Employee>();
    employeeType: string = "EMP";
    factoryEmployee: FactoryEmployee = null;
    constructor(_factoryEmployee: FactoryEmployee) {
        this.factoryEmployee = _factoryEmployee;
        this.currentEmployee = this.factoryEmployee.Create(this.employeeType);
    }
    OnTypeChanged(_type:string) {
        this.employeeType = _type;
        this.currentEmployee = this.factoryEmployee.Create(_type);
    }
    Select(empSelected: Employee) {
        this.currentEmployee = this.factoryEmployee.Create(this.employeeType);
        this.currentEmployee.Name = empSelected.Name;
        this.currentEmployee.Id = empSelected.Id;
        this.currentEmployee.MobileNo = empSelected.MobileNo;
        this.currentEmployee.Department = empSelected.Department;
        this.employeeType = empSelected.EmpType;
    }
    submit() {
        this.employees.push(this.currentEmployee);
        this.employees = this.employees.slice();
        this.currentEmployee = new Employee();
        console.log("Success");
    }
    cancel() {
        this.currentEmployee = new Employee();
        console.log("Success");
    }
} 