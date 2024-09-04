import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit{

  resetForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
      this.resetForm= this.fb.group({
        email: ['', Validators.email]
      })
  }

  onResetPassword(){
    if(this.resetForm.valid){
      console.log(this.resetForm.value);
      alert('check you mail inbox');
      this.router.navigate(['/signin']);
    } else {
      this.resetForm.markAllAsTouched();
      console.log('inavaild email')
    }

  }
}
