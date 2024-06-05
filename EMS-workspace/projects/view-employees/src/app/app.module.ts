import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListModule } from './employee-list/employee-list.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
