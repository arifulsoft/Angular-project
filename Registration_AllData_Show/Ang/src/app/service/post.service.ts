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
  // posts=[
  //   new Post(1,1,"xyz","abc"),
  //   new Post(2,2,"x1","a1")

  // ];
  // // getallpost(){
  // //   return this.posts;
  // // }

  // getallposts():Observable<Post>{
  //   return this.http.get<Post>("https://jsonplaceholder.typicode.com/posts");
  // }

url:string="http://localhost:8080/all";
  
  getallStudent():Observable<Student>{
    return this.http.get<Student>(this.url)
  }

 savestudents(s:Student):Observable<Student>{
  this.url="http://localhost:8080/save";
  return this.http.post<Student>(this.url,s);
 }

}
