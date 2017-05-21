
import { Employee } from "./employee"
import { FactoryEmployee } from "./factory.employee"
import { Component } from "@angular/core"
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from "../service/employee.service"
@Component({
    selector: "emloyee-UI",
    providers: [EmployeeService],
    templateUrl: "./app/employee/employee.component.html"
})
export class EmployeeComponent {
    currentEmployee: Employee = null;
    employees: Employee[];
    employeeType: string = "EMP";
    factoryEmployee: FactoryEmployee = null;
    employeeService: EmployeeService = null;
    errorMessage: string;

    constructor(_factoryEmployee: FactoryEmployee, empService: EmployeeService) {
        this.factoryEmployee = _factoryEmployee;
        this.currentEmployee = this.factoryEmployee.Create(this.employeeType);
        this.employeeService = empService;
        
    }

      ngOnInit() { this.getData(); }

    //on changing tpe from drop down event to trigger
    OnTypeChanged(_type: string) {
        this.employeeType = _type;
        this.currentEmployee = this.factoryEmployee.Create(_type);
    }
    //on select from the grid component
    Select(empSelected: Employee) {
        this.currentEmployee = this.factoryEmployee.Create(this.employeeType);
        this.currentEmployee.Name = empSelected.Name;
        this.currentEmployee.Id = empSelected.Id;
        this.currentEmployee.MobileNo = empSelected.MobileNo;
        this.currentEmployee.Department = empSelected.Department;
        this.employeeType = empSelected.EmpType;
    }
    //on subimt
getData() {
        /*this.employees.push(this.currentEmployee);
        this.employees = this.employees.slice();
        this.currentEmployee = new Employee();*/
        this.employeeService.getEmployees()
            .subscribe(employees => {
                this.employees = employees;
                this.employees = this.employees.slice();
                this.currentEmployee = new Employee();}
            , error => this.errorMessage = <any>error); 
        console.log("Success");
    }
    //on subimt
    submit() {
        /*        this.employees.push(this.currentEmployee);
                this.employees = this.employees.slice();
                this.currentEmployee = new Employee();*/
        this.employeeService.create(this.currentEmployee)
            .subscribe(() => this.employees.push(this.currentEmployee), error => this.errorMessage = <any>error); 
        console.log("Success");
        console.log("Success");
    }
    //on clear click
    cancel() {
        this.currentEmployee = new Employee();
        console.log("Success");
    }
} 