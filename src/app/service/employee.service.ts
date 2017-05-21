// Observable Version
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Employee } from '../Employee/Employee';


@Injectable()
export class EmployeeService {
  private empUrl = '/api/getEmployees';  // URL to web API

  constructor (private http: Http) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get(this.empUrl)
                    .map((response: Response) => response.json())
                    .catch(this.handleError);
  }

  create(emp: Employee): Observable<Employee> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.empUrl, { Id:emp.Id, Name:emp.Name, MobileNo:emp.MobileNo, Department:emp.Department }, options)
                    .map((response: Response) => response.json())
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    if(body != undefined)
    return body.data || { };
    else res.status;
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

