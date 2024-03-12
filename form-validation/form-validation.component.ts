import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css',
  imports: [FormsModule, ReactiveFormsModule]
})
export class FormValidationComponent {

  formData = {
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  };
  onSubmit() {
    if (!this.formData.fName || !this.formData.lName || !this.formData.email || !this.formData.password || !this.formData.confirmPassword || !this.formData.terms) {
      alert('Please fill out all fields.');
    } else if (this.formData.password !== this.formData.confirmPassword) {
      alert('Passwords do not match.');
    } else {
      alert('Form submitted successfully!');
      this.formData.fName = '';
      this.formData.lName = '';
      this.formData.email = '';
      this.formData.password = '';
      this.formData.confirmPassword = '';
      this.formData.terms = false;
    }
  }
}
