import { NgModule } from '@angular/core';
import { StateComponent } from './state.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  // declarations: [
  //   StateComponent
  // ],
  imports: [
    // StoreModule.forFeature('employee',employeeReducer),
    // EffectsModule.forFeature([EmployeeEffects])
  ],
  // exports: [
  //   StateComponent
  // ]
})
export class StateModule { }
