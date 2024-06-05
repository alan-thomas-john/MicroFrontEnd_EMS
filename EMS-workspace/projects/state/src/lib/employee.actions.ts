import { createAction, props } from '@ngrx/store';
import { Employee } from './employee.model';

export const addEmployee = createAction(
    '[Employee] Add Employee',
    props<{ employee: Employee }>()
);

export const loadEmployees = createAction(
    '[Employee] Load Employees');

export const deleteEmployee = createAction(
    '[Employee] Delete Employee',
    props<{ emailId: string }>() // Assuming emailId is unique
);