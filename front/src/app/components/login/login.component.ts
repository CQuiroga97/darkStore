import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  loginForm = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', Validators.required]
  });
onSubmit() {
  if(this.loginForm.invalid){
    Swal.fire({
      icon: 'warning',
      toast: true,
      position: "top-end",
      text: 'Todos los campos son obligatorios',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    return;
  }
}

}


