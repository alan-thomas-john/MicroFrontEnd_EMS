import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';



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
    ])
  ]
})
export class EmployeeListModule { }
