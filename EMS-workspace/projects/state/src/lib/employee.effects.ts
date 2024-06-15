import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { addEmployee, deleteEmployeeFailure, deleteEmployeeSuccess, deleteEmployees, searchEmployees } from './employee.actions';
import { Employee } from './employee.model';
import { StorageService } from 'projects/session-local-storage/projects/storage-service/src/public-api';

@Injectable()
export class EmployeeEffects {
    constructor(
        private actions$: Actions,
        private storageService: StorageService
    ) { }

    addEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addEmployee),
            tap(action => {
                const employees = this.storageService.getItem('employees') || [];
                if (!employees.some((emp: Employee) => emp.emailId === action.employee.emailId)) {
                    employees.push(action.employee);
                    this.storageService.setItem('employees', employees);
                }
                console.log("action", action)
            })
        ), { dispatch: false }
    );



      deleteEmployee$ = createEffect(() =>
        this.actions$.pipe(
          ofType(deleteEmployees),
          mergeMap(action => {
            try {
              let employees: any[] = this.storageService.getItem('employees') || [];
              employees = employees.filter((employee: any) => employee.emailId !== action.emailId);
              this.storageService.setItem('employees', employees);
              return of(deleteEmployeeSuccess({ emailId: action.emailId }));
            } catch (error) {
              return of(deleteEmployeeFailure({ error }));
            }
          })
        )
      );

}
