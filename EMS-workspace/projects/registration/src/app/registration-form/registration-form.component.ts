import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from 'projects/state/src/lib/employee.model';
import { addEmployee } from 'projects/state/src/lib/employee.actions';
import { EmployeeState } from 'projects/state/src/lib/employee.reducer';
import { selectAllEmployees } from 'projects/state/src/lib/employee.selectors';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  employeeDetails: any;
  registrationForm!: FormGroup;
  dialogBox: boolean = false;

  @Output() registerForm = new EventEmitter<any>();
  employees$: Observable<Employee[]> | undefined;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ employees: EmployeeState }>
  ) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required]
    });

    this.employees$ = this.store.pipe(select(selectAllEmployees));
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.employeeDetails = this.registrationForm.value;
      this.dialogBox = true;
    }
  }

  onDialogConfirmed() {
    this.store.dispatch(addEmployee({ employee: this.employeeDetails }));
    this.dialogBox = false;
    this.registrationForm.reset();
  }

  onDialogCancelled() {
    this.dialogBox = false;
  }
}
