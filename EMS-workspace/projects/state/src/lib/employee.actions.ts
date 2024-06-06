import { createAction, props } from '@ngrx/store';
import { Employee } from './employee.model';

export const addEmployee = createAction(
    '[Employee] Add Employee',
    props<{ employee: Employee }>()
);

export const loadEmployees = createAction(
    '[Employee] Load Employees',

);
export const loadEmployeesSuccess = createAction(
    '[Employee] Load Employees Success',
    props<{ employees: Employee[] }>()
);
// export const deleteEmployee = createAction(
//     '[Employee] Delete Employee',
//     props<{ emailId: string }>()
// );

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
