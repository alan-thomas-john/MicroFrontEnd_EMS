import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { addEmployee, deleteEmployee, loadEmployees, loadEmployeesSuccess } from './employee.actions';
// import { StorageService } from './session-local-storage/dist/storage-service';
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

    syncEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadEmployeesSuccess),
            tap(action => {
                this.storageService.setItem('employees', action.employee);
            })
        ), { dispatch: false }
    );

    // deleteEmployee$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(deleteEmployee),
    //         tap(action => {
    //             const employees: Employee[] = this.storageService.getItem('employees') || [];
    //             const updatedEmployees = employees.filter(employee => employee.emailId !== action.emailId);
    //             this.storageService.setItem('employees', updatedEmployees);
    //         }),
    //         map(action => deleteEmployeeSuccess({ emailId: action.emailId }))
    //     )
    // );

}
