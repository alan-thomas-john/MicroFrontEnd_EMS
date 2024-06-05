import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
//import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmationModule } from './confirmation/confirmation.module';
import { RegistrationFormModule } from './registration-form/registration-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StateModule } from 'projects/state/src/public-api';
import { employeeReducer } from 'projects/state/src/lib/employee.reducer';


@NgModule({
  declarations: [
    AppComponent,
    //RegistrationFormComponent,
    //ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationFormModule,
    ReactiveFormsModule,
    StoreModule.forRoot(employeeReducer),
    EffectsModule.forRoot([]),
  StateModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
