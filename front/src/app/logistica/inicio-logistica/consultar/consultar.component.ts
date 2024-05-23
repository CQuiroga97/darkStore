import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RequestService } from '../../../services/request.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgFor,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  public productos:any = []
  public marcas:any = []
  constructor(requestService:RequestService){
    requestService.request("getProductos", {}).then((res:any)=>{
      console.log(res)
      this.productos = res;
    })
    requestService.request("getMarcas", {}).then((res:any)=>{
      console.log(res)
      this.marcas = res;
    })
  }
}
