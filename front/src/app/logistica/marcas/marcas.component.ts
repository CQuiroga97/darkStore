import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestService } from '../../services/request.service';
import { Marca } from '../../models/marca/marca';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent {
  marca: Marca = new Marca();

  constructor(private formBuilder: FormBuilder, private requestService: RequestService) { }

  marcaForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]]
  });

  onSubmit() {
    const name = this.marcaForm.get('name')?.value as string;
    const address = this.marcaForm.get('address')?.value as string;
    const phone = this.marcaForm.get('phone')?.value as string;
    const phoneNum = parseInt(phone);
    const email = this.marcaForm.get('email')?.value as string;

    this.marca = {
      name: name,
      address: address,
      phone: phoneNum,
      email: email
    };

    if (this.marcaForm.invalid) {
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
      this.createMarca();
    }
  }
  createMarca() {
    this.requestService.request_marca("brand", this.marca).then((res: any) => {
      Swal.fire({
        icon: 'success',
        toast: true,
        position: "top-end",
        text: 'Marca creada con éxito',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    });
  }
}
