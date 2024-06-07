import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Employee } from 'projects/state/src/lib/employee.model';
import { openDialog, confirmRegistration, cancelRegistration, addEmployee } from 'projects/state/src/lib/employee.actions';
import { EmployeeState } from 'projects/state/src/lib/employee.reducer';
import { selectDialogOpen, selectEmployeeDetails } from 'projects/state/src/lib/employee.selectors';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  dialogOpen$: Observable<boolean> = of(false);
  employeeDetails$: Observable<Employee | null> = of(null);

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

    this.dialogOpen$ = this.store.pipe(select(selectDialogOpen));
    this.employeeDetails$ = this.store.pipe(select(selectEmployeeDetails));
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.store.dispatch(openDialog({ employee: this.registrationForm.value }));
    }
  }

  onDialogConfirmed(employee: Employee) {
    this.store.dispatch(confirmRegistration({ employee }));
    this.store.dispatch(addEmployee({employee}))
    this.registrationForm.reset();
  }

  onDialogCancelled() {
    this.store.dispatch(cancelRegistration());
  }
}
