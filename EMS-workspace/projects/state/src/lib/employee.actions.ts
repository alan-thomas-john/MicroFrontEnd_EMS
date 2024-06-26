import { createAction, props } from '@ngrx/store';
import { Employee } from './employee.model';

export const addEmployee = createAction(
  '[Employee] Add Employee',
  props<{ employee: Employee }>()
);



export const searchEmployees = createAction(
  '[Employee] Search Employees',
  props<{ searchTerm: string }>()
);

export const setSearchResults = createAction(
  '[Employee] Set Search Results',
  props<{ employees: Employee[] }>()
);

export const deleteEmployees = createAction(
  '[Employee] Delete Employee',
  props<{ emailId: string }>()
);

export const deleteEmployeeSuccess = createAction(
  '[Employee] Delete Employee Success',
  props<{ emailId: string }>()
);

export const deleteEmployeeFailure = createAction(
  '[Employee] Delete Employee Failure',
  props<{ error: any }>()
);

export const openDialog = createAction(
  '[Employee] Open Dialog',
  props<{ employee: Employee }>()
);
export const confirmRegistration = createAction(
  '[Employee] Confirm Registration'
);
export const cancelRegistration = createAction(
  '[Employee] Cancel Registration'
);

export const resetSearch = createAction('[Employee] Reset Search');
