import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500),
      ]),
    });
  }

  checkError(field: string, validator: string): boolean | undefined {
    return (
      this.contactForm.get(field)?.hasError(validator) &&
      this.contactForm.get(field)?.touched
    );
  }

  onSubmit() {
    emailjs
      .send(
        'service_o7tn0pk', // Reemplaza con tu Service ID
        'template_681or6h', // Reemplaza con tu Template ID
        this.contactForm.value,
        'aTT_lfwZBVWiKe9fQ' // Reemplaza con tu Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          this.contactForm.reset(); // Limpia el formulario
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send the message. Please try again later.');
        }
      );
  }
}
