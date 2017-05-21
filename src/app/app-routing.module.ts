import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component'
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app' },//on start
   { path: 'student', component: StudentComponent  },
  
  { path: 'employee', loadChildren: './app/employee/employee.module#EmployeeModule'  }//on demand
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutableComponents = [StudentComponent];
