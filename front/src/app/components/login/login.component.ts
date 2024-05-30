import { Component} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioAuth } from '../../models/usuario.auth/usuario.auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  auth: UsuarioAuth = new UsuarioAuth();

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  loginForm = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', Validators.required]
  });

  onSubmit() {

    const correo = this.loginForm.get('correo')?.value as string;
    const clave = this.loginForm.get('clave')?.value as string;

    this.auth = {
      correo: correo,
      clave: clave
    };

    if (this.loginForm.invalid) {
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
    } else {
      this.authenticate();
    }
  }
  authenticate() {
    this.authService.authenticate(this.auth).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));
        this.goToInicio(data.usuario);
        Swal.fire({
          title: 'Bienvenido',
          text: 'Inicio de sesión exitoso',
          icon: 'success',
          timer: 2000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
        });
      },
      error: (err) => {
        Swal.fire({
          title: 'Error',
          text: 'Usuario o contraseña incorrectos',
          icon: 'error',
          timer: 2000,
        });
      },
    });
  }
  goToInicio(usuario: any) {
    this.router.navigate(['/darkstore']);
  }

}


