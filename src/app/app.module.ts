//main app module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// used to create fake backend
import { fakeBackendProvider } from './helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import {AppRoutingModule, RoutableComponents} from './app-routing.module';
import { AppComponent }   from './app.component';
import {FactoryEmployee} from './employee/factory.employee'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
    BrowserModule,FormsModule,
    HttpModule,
    AppRoutingModule,ReactiveFormsModule
  ],
    declarations: [
        AppComponent,
        RoutableComponents
    ],
    providers:[
        FactoryEmployee,
            // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
        ],
    bootstrap: [AppComponent]
})
//export app module
export class AppModule { }
