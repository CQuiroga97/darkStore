import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RequestService } from '../../../services/request.service';
import { ToastService } from '../../../services/toastr.service';
import { Marca } from '../../../models/marca/marca';

@Component({
  selector: 'app-ver-ingresos',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,CommonModule, MatFormFieldModule, MatSelectModule, MatSortModule],
  templateUrl: './ver-ingresos.component.html',
  styleUrl: './ver-ingresos.component.css'
})
export class VerIngresosComponent {
  public dataSource: any = [];
  public titulosTabla = ["Fecha de ingreso", "Código de ingreso", "Marca"]
  marcas: Marca = new Marca();
  displayedColumns: string[] = ['incomeDate', 'incomeCode', 'brandId'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  constructor(private requestService:RequestService, private toast:ToastService) {
    this.buscar();
    this.loadMarcas();
   }
  buscar() {
    this.requestService.request_pedidos_ingresos("income", {}).then((res:any) => {
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.empTbSort;
      console.log(res.data);
    })
  }

  loadMarcas() {
    this.requestService.request("brand", {}).then((res: any) => {
      this.marcas = res.data;
    })
  }
}
