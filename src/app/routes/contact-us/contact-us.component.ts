import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  contactUsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    about: new FormControl('', [Validators.required]),
  });

  sendForm(event: any) {
    event.stopPropagation();
    event.preventDefault();

    var link =
      'mailto:mishaelifire@gmail.com' +
      '?subject=' +
      this.contactUsForm.controls.name.value +
      '&body=' +
      this.contactUsForm.controls.about.value;
    window.location.href = link;
  }
}
