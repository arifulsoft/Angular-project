import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from './employe';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EpmployService {

  constructor(private http:HttpClient) { }

  url:any;

  save(s:Employe):Observable<Employe>{
    this.url="http://localhost:8082/save";
    return this.http.post<Employe>(this.url,s);
  }
  getallstudents():Observable<Employe>{
    this.url="http://localhost:8082/all";
    return this.http.get<Employe>(this.url);
  }

  getPatientByDoctorId(id:any,password:any):Observable<Employe>{
    this.url="http://localhost:8082/";
    return this.http.get<Employe>(this.url+id+"/"+password);
  }
}
