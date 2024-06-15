import { createReducer, on } from '@ngrx/store';
import {
  addEmployee,
  cancelRegistration,
  confirmRegistration,
  deleteEmployeeSuccess,
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

const filterUniqueEmployees = (employees: Employee[]) => {
  return employees.reduce((acc: Employee[], curr: Employee) => {
    if (!acc.some(emp => emp.emailId === curr.emailId)) {
      acc.push(curr);
    }
    return acc;
  }, []);
};

export const employeeReducer = createReducer(
  initialState,
  on(addEmployee, (state, { employee }) => ({
    ...state,
    confirmRegistration: false,
    employees: filterUniqueEmployees([...state.employees, employee]),
    registrationError: null,

  })),
  
  on(deleteEmployeeSuccess, (state, { emailId }) => ({
    ...state,
    employees: state.employees.filter(
      (employee) => employee.emailId !== emailId
    ),
  })),

  on(searchEmployees, (state, { searchTerm }) => {
    const filteredEmployees = state.employees.filter(employee =>
      employee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    return {
      ...state,
      searchResults: filteredEmployees,
    };
  }),
  
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

