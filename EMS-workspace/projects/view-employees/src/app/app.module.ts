import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StateModule } from 'projects/state/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeListModule,
    // StoreModule.forRoot(employeeReducer),
    // EffectsModule.forRoot([]),
    // StateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
