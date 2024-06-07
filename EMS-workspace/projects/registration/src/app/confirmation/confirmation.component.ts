import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'projects/state/src/lib/employee.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  @Input() employeeData!: Employee;
  @Output() confirmed = new EventEmitter<Employee>();
  @Output() cancelled = new EventEmitter<void>();

  onConfirm() {
    this.confirmed.emit(this.employeeData);
  }

  onCancel() {
    this.cancelled.emit();
  }
}
