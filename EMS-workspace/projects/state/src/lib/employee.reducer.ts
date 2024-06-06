import { createReducer, on } from '@ngrx/store';
import { addEmployee, deleteEmployeeSuccess, loadEmployees, loadEmployeesSuccess, searchEmployees} from './employee.actions';
import { Employee } from './employee.model';
import { StorageService } from 'projects/session-local-storage/projects/storage-service/src/lib/storage.service';


const storageService = new StorageService();
export interface EmployeeState {
    employees: Employee[];
    loading: boolean;
    error: any;
    searchResults: Employee[]; 

}

export const initialState: EmployeeState = {
    employees:storageService.getItem('employees')|| [],
    loading: false,
    error: null,
    searchResults: [],
  
};

export const employeeReducer = createReducer(
    initialState,
    on(addEmployee, (state, { employee }) => ({
        ...state,
        employees: [...state.employees, employee]
    })),
    on(loadEmployeesSuccess, (state, { employees }) => ({
        ...state,
        employees: employees
    })),
    // on(searchEmployeesSuccess, (state, { employees }) => ({
    //     ...state,
    //     searchResults: employees // Update search results
    // })),
    on(deleteEmployeeSuccess, (state, { emailId }) => ({
        ...state,
        employees: state.employees.filter(employee => employee.emailId !== emailId)
    })),
    
    on(searchEmployees, (state, { searchTerm }) => {
        const filteredEmployees = state.employees.filter(employee =>
          employee.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return {
          ...state,
          searchResults: filteredEmployees
        };
      }),
       on(loadEmployees, (state) => ({
        ...state,
        loading: true,
        error: null,
      })),
);