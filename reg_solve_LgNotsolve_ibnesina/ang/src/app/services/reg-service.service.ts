import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../classes/Registration';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegServiceService {

  constructor(private http:HttpClient) {

   }
   url:any;

  save(s:Registration):Observable<Registration>{
    this.url="http://localhost:8082/save";
    return this.http.post<Registration>(this.url,s);
  }

  getallstudents():Observable<Registration>{
    this.url="http://localhost:8082/all";
    return this.http.get<Registration>(this.url);
  }

  getPatientByDoctorId(username:any,password:any):Observable<Registration>{
    this.url="http://localhost:8082/";
    return this.http.get<Registration>(this.url+username+"/"+password);
  }
}
