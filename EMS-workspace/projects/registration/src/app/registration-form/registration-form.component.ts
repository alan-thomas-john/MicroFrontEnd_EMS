import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { openDialog, cancelRegistration, addEmployee } from 'projects/state/src/lib/employee.actions';
import { EmployeeState } from 'projects/state/src/lib/employee.reducer';
import { selectConfirmRegistration, selectDialogOpen, selectEmployeeDetails } from 'projects/state/src/lib/employee.selectors';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  dialogOpen$: Observable<boolean> = of(false);
  confirmRegistration$: Observable<boolean> = of(false);

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
    this.confirmRegistration$ = this.store.pipe(select(selectConfirmRegistration));

    this.confirmRegistration$.subscribe(confirmRegistration => {
      if(confirmRegistration){
        this.onDialogConfirmed()
      }
    });


  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.store.dispatch(openDialog({ employee: this.registrationForm.value }));
    }
    else{
      alert("form not valid");
    }
  }

  onDialogConfirmed() {
    if(this.registrationForm.valid)
{
  this.store.dispatch(addEmployee({employee: this.registrationForm.value}))
  this.registrationForm.reset();
}
  }

  onDialogCancelled() {
    this.store.dispatch(cancelRegistration());
  }
}
