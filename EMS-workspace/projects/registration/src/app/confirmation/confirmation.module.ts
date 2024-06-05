import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StateModule } from 'projects/state/src/public-api';



@NgModule({
  declarations: [
    // ConfirmationComponent,
    // RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmationComponent
      }
    ]),
    StateModule
  ]
})
export class ConfirmationModule { }
