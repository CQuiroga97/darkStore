import { Component, ViewChild } from '@angular/core';
import { RequestService } from '../../../services/request.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ToastService } from '../../../services/toastr.service';

@Component({
  selector: 'app-ver-despachos',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, NgIf, NgFor, MatFormFieldModule, MatSelectModule, MatSortModule],
  templateUrl: './ver-despachos.component.html',
  styleUrl: './ver-despachos.component.css'
})
export class VerDespachosComponent {
  public dataSource:any = [];
  public titulosTabla = ["Fecha de despacho", "Código de despacho", "Transportadora", "Número de guía", "Cantidad de productos"]
  displayedColumns: string[] = ['fecha_despacho', 'codigo_despacho', 'transportadora','numero_guia', 'cantidad_productos', 'estado'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  constructor(private requestService:RequestService, private toast:ToastService){
    this.buscar();
  }
  buscar(){
    this.requestService.request_pedidos_despachos("getDespachos", {}).then((res:any)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.empTbSort;
    })
  }
  cambiarEstado(estado:any, id_despacho:any){
    this.requestService.request_pedidos_despachos("updateDespacho", {id_despacho:id_despacho, estado:estado.value}).then((res:any)=>{
     this.toast.openSnackBar("El despacho ha cambiado su estado a " + estado.value, "Aceptar")
    })

  }
}
