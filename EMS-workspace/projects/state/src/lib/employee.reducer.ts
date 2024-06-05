import { createReducer, on } from '@ngrx/store';
import { addEmployee, loadEmployeesSuccess} from './employee.actions';
import { Employee } from './employee.model';

export interface EmployeeState {
    employees: Employee[];
    loading:boolean;
    error:any;
    
}

export const initialState: EmployeeState = {
    employees: [],
    loading: false,
    error: null
};

export const employeeReducer = createReducer(
    initialState,
    on(addEmployee, (state, { employee }) => ({
        ...state,
        employee: [...state.employees, employee]
    })),
    on(loadEmployeesSuccess, (state, { employee }) => ({
        ...state,
        employee: employee
    })),
);