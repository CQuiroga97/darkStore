import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [MatButton, MatIcon, CommonModule],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {

  constructor(private requestService: RequestService) { }

  descargarReporteInventario() {

    /*this.requestService.request_reportes('report/income', {}).then((res: any) => {
      console.log(res);
    }).catch((err: any) => {
      console.log(err);
    });*/
  }
  descargarReporteIngreso() {
    /*this.requestService.request_reportes('report/income', {}).then((res: any) => {
      console.log(res);
    }).catch((err: any) => {
      console.log(err);
    });*/
  }

  downloadReport(data: any, columnHeader:string[], filename = 'reporte.csv') {
    let csvData = this.convertToCSV(data, columnHeader);
    let blob = new Blob(['', csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename);
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
  convertToCSV(data: any, headerList: string[]) {
    let array = typeof data != 'object' ? JSON.parse(data) : data;
    let str = '';
    let row:string = '';

    for (let index in headerList) {
      row += headerList[index] + ';';
    }
    row = row.slice(0, -1);
    str += row + '';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in headerList) {
        let head = headerList[index];
        line += array[i][headerList[index]];
      }
      str += line + '';
    }
    return str;
  }
}
