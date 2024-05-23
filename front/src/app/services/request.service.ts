import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { enviroment } from '../components';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) {

  }

  request(url:string,data:any) {
    return new Promise((resolve, reject)=>{

      this.http.post(enviroment.URL + "api/" + url, {data:data}).subscribe({
        next:(res:any) =>{
            console.log(res)
            if(res != undefined || res != null){
              let jsonData = JSON.parse(res.result);
              resolve(jsonData);
            }else{
              reject(null);
            }
          

        }
      });
    })

    // return this.http.post("http://backend_container:3000/api/"+ url, data);

  }
}
