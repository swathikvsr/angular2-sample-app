import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {EmployeeRoutingComponent, routedComponents } from './employee.routing.module'
import { GridComponent } from '../shared/grid.component';
import {EmployeeService} from "../service/employee.service"
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, EmployeeRoutingComponent],
  declarations: [routedComponents, GridComponent],
  providers:[EmployeeService]
})
export class EmployeeModule { }
