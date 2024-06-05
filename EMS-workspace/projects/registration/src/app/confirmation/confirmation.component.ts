import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  @Input() employeeData!: any;
//  confirmMessage:String|null=null;
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  // onRegisterForm(employeeData:any){
  //   console.log('Registered Employee',employeeData);
  //   //handle employeedetails
  //  // this.confirmMessage='Registration Successfull!';

  //   // setTimeout(() => {
  //   //   this.confirmMessage=null;
  //   // },5000);
  // }
  ngOnInit(){
    console.log(this.employeeData)
  }
  onConfirm() {
    this.confirmed.emit();

  }

  onCancel() {
    this.cancelled.emit();
  }
}
