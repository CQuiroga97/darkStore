import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../../models/usuario/usuario';
import { RequestService } from '../../../services/request.service';
import Swal from 'sweetalert2';
import { Producto } from '../../../models/producto/producto';
import { CommonModule } from '@angular/common';
import { Ingreso } from '../../../models/ingreso/ingreso';
import { Marca } from '../../../models/marca/marca';

@Component({
  selector: 'app-ingresar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ingresar.component.html',
  styleUrl: './ingresar.component.css'
})
export class IngresarComponent {
  user: Usuario = new Usuario();
  marca: Marca = new Marca();
  products: any = [];
  ingreso: Ingreso = new Ingreso();
  constructor(private formBuilder: FormBuilder, private requestService: RequestService) { }

  ingresoForm = this.formBuilder.group({
    incomeDate: ['', Validators.required],
    incomeCode: ['', Validators.required],
    productId: ['', Validators.required],
    quantity: ['', Validators.required]

  });

  onSubmit() {
    const incomeDate = this.ingresoForm.get('incomeDate')?.value as string;
    const incomeCode = this.ingresoForm.get('incomeCode')?.value as string;
    const incomeDateNum = new Date(incomeDate);
    const brandId = this.marca.id;
    const productId = this.ingresoForm.get('productId')?.value as string;
    const productIdNum = parseInt(productId);
    const quantity = this.ingresoForm.get('quantity')?.value as string;
    const quantityNum = parseInt(quantity);
    const incomeDetails = [{
      productId: productIdNum,
      quantity: quantityNum,
    }];
    this.ingreso = {
      incomeDate: incomeDateNum.toISOString(),
      incomeCode: incomeCode,
      brandId: this.marca.id,
      incomeDetails: incomeDetails
    };
    console.log(this.ingreso);
    if (this.ingresoForm.invalid) {
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
    } else {
      this.createIngreso();
    }
  }
  createIngreso() {
    this.requestService.request_ingreso('income', this.ingreso).then((response) => {
      Swal.fire({
        icon: 'success',
        toast: true,
        position: "top-end",
        text: 'Ingreso creado',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        toast: true,
        position: "top-end",
        text: 'Error al crear ingreso',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
    });
  }


  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('usuario') as string);
    this.requestService.request_productos('product', {}).then((res: any) => {
      this.products = res.data;
    });
    console.log(this.products);
    this.requestService.request_getMarca('getBrand', {email:this.user.correo}).then((res: any) => {
      this.marca = res.data;
      console.log(this.marca.id);
    }).catch((error) => {
      console.log(error);
    });

  }
}
