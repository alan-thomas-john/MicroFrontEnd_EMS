import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { StorageService } from 'projects/session-local-storage/projects/storage-service/src/public-api';
import { addEmployee, loadEmployees } from 'projects/state/src/lib/employee.actions';
import { Employee } from 'projects/state/src/lib/employee.model';
import { EmployeeState } from 'projects/state/src/lib/employee.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  employeeeDetails: any;
  registrationForm!: FormGroup;
  dialogBox: boolean = false;

  @Output() registerForm = new EventEmitter<any>();
  employees$: Observable<Employee[]> | undefined;
  constructor(private fb: FormBuilder, private router: Router, private store: Store<{ employees: EmployeeState }>, private storage: StorageService) { }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required]
    });

  }


  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form is valid. Emitting event with form data:', this.registrationForm.value);
      // this.registerForm.emit(this.registrationForm.value);
      this.employeeeDetails = this.registrationForm.value
      this.dialogBox = true;
    } else {
      console.log('Form is invalid.');
    }

  }

  onDialogConfirmed() {
    console.log("fai")

    this.employees$ = this.store.pipe(select('employees', 'employees'));
    this.store.dispatch(addEmployee({ employee: this.employeeeDetails }));
    this.dialogBox = false;
    console.log("   this.employees$ ", this.employees$)

  }
  onDialogCancelled() {
    this.dialogBox = false;

  }
}
