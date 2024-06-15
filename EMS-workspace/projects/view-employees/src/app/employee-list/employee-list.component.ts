import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  deleteEmployees,
} from 'projects/state/src/lib/employee.actions';
import { Employee } from 'projects/state/src/lib/employee.model';
import { EmployeeState } from 'projects/state/src/lib/employee.reducer';
import { selectAllEmployees } from 'projects/state/src/lib/employee.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]> | undefined;
  employees: any;
  isEmpty: boolean = true;
  constructor(
    private store: Store<{ employees: EmployeeState }>,
  ) {}

  ngOnInit(): void {
    this.employees$ = this.store.pipe(select(selectAllEmployees));
    this.employees$.subscribe(employees => {
      console.log('Employees in component:', employees);
      if(employees.length!=0){
        this.isEmpty=false;
      }
    });
    console.log("hello")
  }

  deleteEmployees(emailId: string) {
    this.store.dispatch(deleteEmployees({ emailId }));

  }
}
