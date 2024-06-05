import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StateModule } from 'projects/state/src/public-api';



@NgModule({
  declarations: [
    ConfirmationComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component:RegistrationFormComponent
      }
    ]),
    StateModule
  ]
})
export class RegistrationFormModule { }
