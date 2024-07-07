import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
 
  url:string="http://localhost:8080/";
  getallstudents():Observable<Student>{
    this.url="http://localhost:8080/all";
    return this.http.get<Student>(this.url);
  }


  savestudents(s:Student):Observable<Student>{
    this.url="http://localhost:8080/save";
    return this.http.post<Student>(this.url,s);
  }

  // login

  array:any=[
    {id:101,name:"Ariful",email:"arif@gmail.com",password:123},
    {id:102,name:"Raj",email:"arif@gmail.com",password:123},
    {id:103,name:"Topu",email:"arif@gmail.com",password:123},
    {id:104,name:"Sumon",email:"arif@gmail.com",password:123},
    {id:105,name:"Ebrahim",email:"arif@gmail.com",password:123}
  ]
  public getData(){
    return this.array
  }
  public data:any;

}
