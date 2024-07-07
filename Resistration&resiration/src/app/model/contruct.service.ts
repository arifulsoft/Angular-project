import { Injectable } from '@angular/core';
import { Contruct } from '../classes/contruct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContructService {

  constructor(private http:HttpClient) { }
  url:any;
  save(s:Contruct):Observable<Contruct>{
    this.url="http://localhost:8082/save";
    return this.http.post<Contruct>(this.url,s);
  }

 
  loginById(id:any,password:any):Observable<Contruct>{
    this.url="http://localhost:8082/";
    return this.http.get<Contruct>(this.url+id+"/"+password);
  }
}
