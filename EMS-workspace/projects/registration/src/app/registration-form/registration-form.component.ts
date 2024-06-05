import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
  
  registrationForm!: FormGroup;
  success: boolean=false;
  @Output()registerForm = new EventEmitter<any>();

  constructor(private fb: FormBuilder,private router: Router) {}
  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required]
    });
  }

  
  onSubmit(){
    if (this.registrationForm.valid) {
      console.log('Form is valid. Emitting event with form data:', this.registrationForm.value);
      this.registerForm.emit(this.registrationForm.value);
      this.success=true;
    } else {
      console.log('Form is invalid.');
    }
  }
}
