import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },//on start
  
  { path: 'employee', component: EmployeeComponent  },//on demand
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  EmployeeComponent
];


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/