import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule, routableComponents} from './app-routing.module';
import { AppComponent }   from './app.component';
import {FactoryEmployee} from './employee/factory.employee'
import { GridComponent } from './shared/grid.component';
@NgModule({
    imports: [
    BrowserModule,FormsModule,
    HttpModule,
    AppRoutingModule
  ],
    declarations: [
        AppComponent,routableComponents,GridComponent
    ],
    providers:[FactoryEmployee],
    bootstrap: [AppComponent]
})
export class AppModule { }
