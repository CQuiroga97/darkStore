import { Component, ViewChild } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RequestService } from '../../../services/request.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSelectModule, NgFor,MatButtonModule, MatDividerModule, MatIconModule, MatTableModule, NgIf, MatSortModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  public productos:any = [];
  public dataSource:any = [];
  displayedColumns: string[] = ['id_producto', 'nombre_producto', 'descripcion','stand', 'columna', 'nivel', 'cantidad'];
  public marcas:any = []
  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  public marca:any = null;
  public producto:any = null;

  constructor(private requestService:RequestService){
    
    
  }
  ngOnInit(){
    this.requestService.request("getMarcas", {}).then((res:any)=>{
      this.marcas = res;
    })
    this.buscar();
  }
  selectMarca(marca:any){
    if(marca.value)
      this.requestService.request("getProductosMarca", {marca_id:marca.value}).then((res:any)=>{
        this.productos = res;
      })
    else{
      this.producto = null;
      this.productos = []
    }
      
  }
  buscar(){
    if((!this.marca) && !this.producto)
      this.requestService.request("totalUbicaciones", {}).then((res:any)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.setSort();
      })
    if(this.marca && !this.producto)
      this.requestService.request("totalUbicacionesMarca", {id_marca:this.marca}).then((res:any)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.setSort();
      })
    if(this.producto)
      this.requestService.request("totalUbicacionesProducto", {id_producto:this.producto}).then((res:any)=>{
        this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.setSort();
      })
  }
  limpiar(){
    this.marca = null;
    this.producto = null;
    this.productos = [];
  }
  setSort(){
    setTimeout(()=>{

      this.dataSource.sort = this.empTbSort;
      this.dataSource.sortingDataAccessor = (item:any, property:any) => {
        switch (property) {
          case 'nombre_producto': return item.producto.referencia;
          case 'descripcion': return item.producto.descripcion;
          case 'stand': return item.ubicacione.estan;
          case 'columna': return item.ubicacione.columna;
          case 'nivel': return item.ubicacione.nivel;
          case 'cantidad': return item.cantidad;
          default: return item[property];
        }
      };
    })
  }
}
