import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  successMessage:String|null=null;

  onRegisterForm(employeeData:any){
    console.log('Registered Employee',employeeData);
    //handle employeedetails
    this.successMessage='Registration Successfull!';

    setTimeout(() => {
      this.successMessage=null;
    },5000);
  }
}
