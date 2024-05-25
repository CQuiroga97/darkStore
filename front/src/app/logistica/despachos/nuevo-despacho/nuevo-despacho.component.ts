import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RequestService } from '../../../services/request.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ToastService } from '../../../services/toastr.service';

@Component({
  selector: 'app-nuevo-despacho',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule,FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule],
  templateUrl: './nuevo-despacho.component.html',
  styleUrl: './nuevo-despacho.component.css'
})
export class NuevoDespachoComponent {
  public cantidadProductos = 0;
  public pedidos:any = [];
  public pedidosEnviar:any = [];
  public codigo_despacho:any = null;
  public transportadora:any = null;
  public numero_guia:any = null;
  constructor(private requestService:RequestService, private toast:ToastService){
    
    this.buscar();
  }
  buscar(){
    this.requestService.request_pedidos_despachos("getPedidos", {estado:"EN PROCESO"}).then((res:any)=>{
      this.pedidos = res;
      this.cantidadProductos = 0;
      this.pedidosEnviar = [];
    })
  }
  agregarPedido(pedido:any){
    pedido.detalles_pedidos.forEach((element:any) => {
      this.cantidadProductos += element.cantidad;
    });
    this.pedidos = this.pedidos.filter((el:any)=>el.id_pedido != pedido.id_pedido)
    this.pedidosEnviar.push(pedido)
  }
  eliminarPedido(pedido:any){    
    pedido.detalles_pedidos.forEach((element:any) => {
      this.cantidadProductos -= element.cantidad;
    });
    this.pedidosEnviar = this.pedidosEnviar.filter((el:any)=>el.id_pedido != pedido.id_pedido)
    this.pedidos.push(pedido)
  }
  guardar(){
    let i = 0;
    let despacho = {
      fecha_despacho:new Date().toDateString(),
      codigo_despacho:this.codigo_despacho,
      marca_id:1,
      transportadora:this.transportadora,
      numero_guia:this.numero_guia,
      cantidad_productos:this.cantidadProductos,
      cantidad_embalaje:this.cantidadProductos,
      usuario_interno_id:null,
      estado:"EN RUTA"
    }
      this.requestService.request_pedidos_despachos("createDespacho", despacho).then((res:any)=>{
        this.toast.openSnackBar("Se han despachado los productos con éxito", "Aceptar")
        this.transportadora = "";
        this.codigo_despacho = "";
        this.numero_guia = "";
      })
    this.pedidosEnviar.forEach((pedido:any)=>{
      this.requestService.request_pedidos_despachos("updatePedido", {id_pedido:pedido.id_pedido, estado:"EN ENVIO"}).then((res:any)=>{
          this.buscar();
      })
    })
  }
}
