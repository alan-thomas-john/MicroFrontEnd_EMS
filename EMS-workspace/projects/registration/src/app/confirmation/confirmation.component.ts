import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { cancelRegistration, confirmRegistration } from 'projects/state/src/lib/employee.actions';
import { Employee } from 'projects/state/src/lib/employee.model';
import { EmployeeState } from 'projects/state/src/lib/employee.reducer';
import { selectEmployeeDetails } from 'projects/state/src/lib/employee.selectors';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{
  employeeDetails$: Observable<Employee | null> = of(null);
  employee!:Employee | null;
  constructor(
    private store: Store<{ employees: EmployeeState }>
  ) {  }

  ngOnInit(){
    this.employeeDetails$ = this.store.pipe(select(selectEmployeeDetails));
    this.employeeDetails$.subscribe(employeeDetails => {
      this.employee=employeeDetails
    });

  }
  onConfirm() {
    this.store.dispatch(confirmRegistration());
  }

  onCancel() {
    this.store.dispatch(cancelRegistration());

  }
}
