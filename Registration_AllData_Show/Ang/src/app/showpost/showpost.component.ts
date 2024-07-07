import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.css']
})
export class ShowpostComponent implements OnInit {

  // constructor(private myservice:PostService) {
  //   //this.allpost=this.myservice.getallpost();
  //   this.myservice.getallposts().subscribe((response)=>{this.allpost=response});

  //  }

  ngOnInit(): void {
    this.myservice.getallStudent().subscribe((x)=>{this.allStudent=x});
  }
  // allpost:any=[];
  
  allStudent:any=[];
  constructor(private myservice:PostService) {
    //this.allpost=this.myservice.getallpost();
    this.myservice.getallStudent().subscribe((response)=>{this.allStudent=response});
 
}

student:any={};
id:any;
name:any;
email:any;
round:any;

save(){
  this.student=new Student(this.id,this.name,this.email,this.round);
  this.myservice.savestudents(this.student).subscribe(()=>{});
  this.myservice.getallStudent().subscribe((x)=>{this.allStudent=x});

}


}