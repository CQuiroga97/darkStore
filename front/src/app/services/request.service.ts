import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { enviroment } from '../components';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  request_pedidos_ingresos(url: string, data: any) {
    return new Promise((resolve, reject) => {

      // this.http.post(enviroment.URL + "api/" + url, {data:data}).subscribe({
      this.http.get("http://100.27.170.95:3001/" + url, data).subscribe({
        next: (res: any) => {
          if (res != undefined || res != null) {
            resolve(res);
          } else {
            reject(null);
          }
        }
      });
    })
  }

  constructor(private http: HttpClient) {

  }

  request(url: string, data: any) {
    return new Promise((resolve, reject) => {

      // this.http.post(enviroment.URL + "api/" + url, {data:data}).subscribe({
      this.http.post("http://44.194.25.204:3002/api/" + url, data).subscribe({
        next: (res: any) => {
          if (res != undefined || res != null) {
            resolve(res);
          } else {
            reject(null);
          }


        }
      });
    })

    // return this.http.post("http://backend_container:3000/api/"+ url, data);

  }
  requestLogin(url: string, data: any) {
    return new Promise((resolve, reject) => {

      // this.http.post(enviroment.URL + "api/" + url, {data:data}).subscribe({
      this.http.post("http://44.194.25.204:3003/api/" + url, data).subscribe({
        next: (res: any) => {
          if (res != undefined || res != null) {
            resolve(res);
          } else {
            reject(null);
          }


        }
      });
    })

    // return this.http.post("http://backend_container:3000/api/"+ url, data);

  }
  request_pedidos_despachos(url: string, data: any) {
    return new Promise((resolve, reject) => {

      // this.http.post(enviroment.URL + "api/" + url, {data:data}).subscribe({
      this.http.post("http://44.194.25.204:3004/api/" + url, data).subscribe({
        next: (res: any) => {
          if (res != undefined || res != null) {
            resolve(res);
          } else {
            reject(null);
          }


        }
      });
    })

    // return this.http.post("http://backend_container:3000/api/"+ url, data);
  }
  request_reportes(url: string, data: any) {
    return new Promise((resolve, reject) => {

      this.http.get("http://100.27.170.95:3006/" + url, data).subscribe({
        next: (res: any) => {
          if (res != undefined || res != null) {
            resolve(res);
          } else {
            reject(null);
          }
        }
      })
    })
  }

  request_marca(url: string, data: any) {
    return new Promise((resolve, reject) => {

      this.http.post("http://100.27.170.95:3000/" + url, data).subscribe({
        next: (res: any) => {
          if (res != undefined || res != null) {
            resolve(res);
          } else {
            reject(null);
          }
        }
      })
    })
  }

  request_ingreso(url: string, data: any) {
    return new Promise((resolve, reject) => {

      this.http.post("http://100.27.170.95:3001/" + url, data).subscribe({
        next: (res: any) => {
          if (res != undefined || res != null) {
            resolve(res);
          } else {
            reject(null);
          }
        }
      })
    })
  }

  request_productos(url: string, data: any) {
    return new Promise((resolve, reject) => {

      this.http.get("http://100.27.170.95:3005/" + url, data).subscribe({
        next: (res: any) => {
          if (res != undefined || res != null) {
            resolve(res);
          } else {
            reject(null);
          }
        }
      })
    })
  }

  request_getMarca(url: string, data: any) {
    return new Promise((resolve, reject) => {

      this.http.get("http://100.27.170.95:3000/" + url, data).subscribe({
        next: (res: any) => {
          if (res != undefined || res != null) {
            resolve(res);
          } else {
            reject(null);
          }
        }
      })
    })
  }
}

