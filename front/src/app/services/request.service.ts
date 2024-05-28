import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import { enviroment } from '../components';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) {

  }

  request(url:string,data:any) {
    return new Promise((resolve, reject)=>{

      // this.http.post(enviroment.URL + "api/" + url, {data:data}).subscribe({
      this.http.post("http://localhost:3002/api/" + url, data).subscribe({
        next:(res:any) =>{
            if(res != undefined || res != null){
              resolve(res);
            }else{
              reject(null);
            }
          

        }
      });
    })

    // return this.http.post("http://backend_container:3000/api/"+ url, data);

  }
  request_pedidos_despachos(url:string,data:any) {
    return new Promise((resolve, reject)=>{

      // this.http.post(enviroment.URL + "api/" + url, {data:data}).subscribe({
      this.http.post("http://localhost:3005/api/" + url, data).subscribe({
        next:(res:any) =>{
            if(res != undefined || res != null){
              resolve(res);
            }else{
              reject(null);
            }
          

        }
      });
    })

    // return this.http.post("http://backend_container:3000/api/"+ url, data);

  }
}
