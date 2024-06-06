import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { deleteEmployees, loadEmployees } from 'projects/state/src/lib/employee.actions';
import { Employee } from 'projects/state/src/lib/employee.model';
import { EmployeeState } from 'projects/state/src/lib/employee.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees$: Observable<Employee[]> | undefined;

  constructor(private store:Store<{employees: EmployeeState}>){}

  ngOnInit(): void {
     // Dispatch the action to load employees from local storage
     this.store.dispatch(loadEmployees());
     // Select the employees from the store
     this.employees$ = this.store.pipe(select('employees', 'employees'));

       // Log the employees$ observable for debugging
    this.employees$.subscribe(employees => {
      console.log('Employees in component:', employees);
    });
  }

  deleteEmployees(emailId: string) {
    this.store.dispatch(deleteEmployees({ emailId }));
  }
}
