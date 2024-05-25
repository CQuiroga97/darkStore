import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { ToastService } from '../../services/toastr.service';
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [NgFor, MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  NgIf],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  pedidos:any = [];
  public loading = true;
  constructor(private requestService:RequestService, private toast:ToastService){
    
    this.buscar();
  }
  buscar(){
    this.loading = true;
    this.requestService.request_pedidos_despachos("getPedidos", {estado:"PENDIENTE"}).then((res:any)=>{
      this.pedidos = res;
      this.loading = false;
    })
  }
  preparar(pedido:any){
    this.loading = true;
    this.requestService.request_pedidos_despachos("updatePedido", {id_pedido:pedido.id_pedido, estado:"EN PROCESO"}).then((res:any)=>{
      this.requestService.request("restarCantidadUbicaciones", pedido.detalles_pedidos).then((res2:any)=>{
        this.toast.openSnackBar("El pedido ha sido enviado a los despachos en proceso", "Aceptar")
        this.buscar()
        this.loading = false;
      })
    })
  }
}
