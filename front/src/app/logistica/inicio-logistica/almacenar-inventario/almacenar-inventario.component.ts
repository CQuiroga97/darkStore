import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RequestService } from '../../../services/request.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NgFor } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { NgModel } from '@angular/forms';
import { ToastService } from '../../../services/toastr.service';

@Component({
  selector: 'app-almacenar-inventario',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, NgFor,MatButtonModule, MatDividerModule, MatIconModule, MatTableModule],
  templateUrl: './almacenar-inventario.component.html',
  styleUrl: './almacenar-inventario.component.css'
})
export class AlmacenarInventarioComponent {
  public productos:any = [];
  public stands:any = [];
  public columnas:any = [];
  public niveles:any = [];
  public productoSeleccionado:any;
  public idProducto:any;
  public idUbicacion:any;
  displayedColumns: string[] = ['id_producto', 'nombre_producto', 'stand', 'columna', 'nivel'];
  public marcas:any = []
  public marcaSel:any = null;
  public productoSel:any = null;
  public standSel:any = null;
  public columnaSel:any = null;
  public nivelSel:any = null;
  constructor(private requestService:RequestService, private toast:ToastService){
    this.reiniciarFiltros()
  }
  selectMarca(marca:any){
    this.requestService.request("getProductosIngresados", {marca_id:marca.value}).then((res:any)=>{
      this.productos = res;
    })
  }
  selectProducto(producto:any){
    this.productoSeleccionado = this.productos.filter((el:any)=>el.producto.id_producto == producto.value)[0]
    this.requestService.request("getUbicacionesCategoria", {categoria_producto_id:this.productoSeleccionado.producto.categoria_producto_id}).then((res:any)=>{
      this.stands = res;
    })
  }
  selectStand(stand:any){
    let column = this.stands.filter((el:any)=>el.estan == stand.value)
    this.columnas = column[0].columna[0];
  }
  selectColumna(columna:any){
    let nivel = this.columnas.filter((el:any)=>el.columna == columna.value)
    this.niveles = nivel[0].nivel;
  }
  reiniciarFiltros(){
    this.requestService.request("getMarcas", {}).then((res:any)=>{
      this.marcas = res;
      this.productos = [];
      this.stands = [];
      this.columnas = [];
      this.niveles = [];
      this.productoSeleccionado = null;
      this.idProducto = null;
      this.idUbicacion = null;
      this.marcaSel = null;
      this.productoSel = null;
      this.standSel = null;
      this.columnaSel = null;
      this.nivelSel = null;
    })
  }
  almacenar(){
    const data = {ubicacion_id: this.idUbicacion, producto_id:this.productoSeleccionado.producto.id_producto, cantidad:this.productoSeleccionado.cantidad}
    this.requestService.request("almacenarProducto", data).then((res:any)=>{
      this.requestService.request("updateIngreso", {id_ingreso:this.productoSeleccionado.ingreso.id_ingreso, estado:"ALMACENADO"}).then((res2:any)=>{

        this.reiniciarFiltros();
        this.toast.openSnackBar("Producto almacenado", "Aceptar")
      })
    })
  }
}
