import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EmployeeState } from './employee.reducer';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employees');

export const selectSearchResults = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.searchResults
);

export const selectAllEmployees = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state.employees
  );
  
  export const selectEmployeeError = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state.error
  );

  export const selectDialogOpen = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state.dialogOpen
  );
  
  export const selectEmployeeDetails = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state.employeeDetails
  );