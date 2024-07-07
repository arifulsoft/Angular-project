import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Appointment } from './modele/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

 url:any;

  save(s:Appointment):Observable<Appointment>{
    this.url="http://localhost:8082/save";
    return this.http.post<Appointment>(this.url,s);
  }

  getPatientByDoctorId(id:any,password:any):Observable<Appointment>{
    this.url="http://localhost:8082/";
    return this.http.get<Appointment>(this.url+id+"/"+password);
  }
  loginById(a_id:any,p_name:any):Observable<Appointment>{
    this.url="http://localhost:8082/";
    return this.http.get<Appointment>(this.url+a_id+"/"+p_name);
  }

  patientId(id:any):Observable<Appointment>{
    this.url="http://localhost:8082/";
    return this.http.get<Appointment>(this.url+id);
  }
}

