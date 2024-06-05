import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';
import { StateModule } from 'projects/state/src/public-api';



@NgModule({
  declarations: [
    EmployeeListComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,RouterModule.forChild([
      {
        path:'',
        component:EmployeeListComponent
      }
    ]),
    StateModule
  ]
})
export class EmployeeListModule { }
