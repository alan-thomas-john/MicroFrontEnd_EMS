import { createReducer, on } from '@ngrx/store';
import {
  addEmployee,
  cancelRegistration,
  confirmRegistration,
  deleteEmployeeSuccess,
  loadEmployees,
  loadEmployeesSuccess,
  openDialog,
  resetSearch,
  searchEmployees,
} from './employee.actions';
import { Employee } from './employee.model';
import { StorageService } from 'projects/session-local-storage/projects/storage-service/src/lib/storage.service';

const storageService = new StorageService();
export interface EmployeeState {
  dialogOpen: boolean;
  employeeDetails: Employee | null;
  employees: Employee[];
  loading: boolean;
  error: any;
  searchResults: Employee[];
  confirmRegistration: boolean;
}

export const initialState: EmployeeState = {
  employees: storageService.getItem('employees') || [],
  dialogOpen: false,
  employeeDetails: null,
  loading: false,
  error: null,
  searchResults: [],
  confirmRegistration: false,
};

export const employeeReducer = createReducer(
  initialState,
  on(addEmployee, (state, { employee }) => ({
    ...state,
    confirmRegistration: false,
    employees: [...state.employees, employee],
  })),
  on(loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees: employees,
  })),
  // on(searchEmployeesSuccess, (state, { employees }) => ({
  //     ...state,
  //     searchResults: employees // Update search results
  // })),
  on(deleteEmployeeSuccess, (state, { emailId }) => ({
    ...state,
    employees: state.employees.filter(
      (employee) => employee.emailId !== emailId
    ),
  })),

  on(searchEmployees, (state, { searchTerm }) => {
    const filteredEmployees = state.employees.filter((employee) =>
      employee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    return {
      ...state,
      searchResults: filteredEmployees,
    };
  }),
  on(loadEmployees, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(openDialog, (state, { employee }) => ({
    ...state,
    dialogOpen: true,
    employeeDetails: employee,
  })),
  on(confirmRegistration, (state) => ({
    ...state,
    dialogOpen: false,
    confirmRegistration: true,
  })),
  on(cancelRegistration, (state) => ({
    ...state,
    dialogOpen: false,
    employeeDetails: null,
  })),

  on(resetSearch, (state) => ({
    ...state,
    searchResults: [],
  }))

);

