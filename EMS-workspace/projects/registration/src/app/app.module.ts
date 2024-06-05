import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
//import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmationModule } from './confirmation/confirmation.module';
import { RegistrationFormModule } from './registration-form/registration-form.module';
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
