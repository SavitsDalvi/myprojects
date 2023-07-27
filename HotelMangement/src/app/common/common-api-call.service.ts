import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
  url='http://localhost:3000/';
  constructor(public http: HttpClient){}
    
  postApiCall(endpoint: string, formData:any) { 
      let url =this.url+endpoint;
      return this.http.post(url, formData);

  }
  //getApiCall(endPoint:string){
    //let url = this.url+endPoint;
    //return this.http.get(url);
  //}
}
