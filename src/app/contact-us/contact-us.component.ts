import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule,],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required],
    })
  }

  onContactFormSubmit() {
    if (this.contactUsForm.valid) {
      console.log(this.contactUsForm.value);
      alert('Thank you for your feedback');
      this.contactUsForm.reset()
    } else {
      this.contactUsForm.markAllAsTouched();
      console.log('invalid data')
    }

  }
}
