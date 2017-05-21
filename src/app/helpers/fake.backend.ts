import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    // array in local storage for registered users
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    let employees = [
        { Id: 1, Name: 'Windstorm', MobileNo: "", Department: "physics", EmpType: "EMP" }
    ];
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            if (connection.request.url.endsWith('/api/getEmployees') && connection.request.method === RequestMethod.Get) {
                // get users
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: employees })));
                return;
            }

            // create user
            if (connection.request.url.endsWith('/api/getEmployees') && connection.request.method === RequestMethod.Post) {
                // get new employee object from post body
                let newEmp = JSON.parse(connection.request.getBody());

                // validation
                let duplicateUser = employees.filter(emp => { return emp.Name === newEmp.Name; }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Employeename "' + newEmp.username + '" is already taken'));
                }

                // save new employee
                employees.push(newEmp);

                // respond 200 OK
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                return;
            }


            // pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });

        }, 500);

    });

    return new Http(backend, options);
};

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};

/*export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        // array in local storage for registered users
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    let employees = [
      { Id: 1, Name: 'Windstorm', MobileNo:"", Department:"physics", EmpType:"EMP" }
    ];

        // configure fake backend
        backend.connections.subscribe((connection: MockConnection) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

               

            }, 500);

        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
};
*/