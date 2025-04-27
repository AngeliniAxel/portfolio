import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Notyf } from 'notyf';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'contact',
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  notyf: Notyf;

  constructor(private translate: TranslateService) {
    this.notyf = new Notyf({ duration: 4000 });

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
        environment.emailServiceId,
        environment.emailTemplateId,
        this.contactForm.value,
        environment.emailPublicKey
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.notyf.success({
            message: this.translate.instant('Notification.sent'),
            background: '#1abc9c',
          });
          this.contactForm.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          this.notyf.error(this.translate.instant('Notification.error'));
        }
      );
  }
}
