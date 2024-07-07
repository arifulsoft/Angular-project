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

  allstudent:any=[];
  constructor(private myservice:PostService) {
    
   }

student:any;
id:any;
name:any;
email:any;
round:any;

save(){
  this.student=new Student(this.id,this.name,this.email,this.round);
  this.myservice.savestudents(this.student).subscribe(()=>{
    this.myservice.getallstudents().subscribe((x)=>{this.allstudent=x});

  });
}

  ngOnInit(): void {
    this.myservice.getallstudents().subscribe((x)=>{this.allstudent=x});
  }
  
  
  

}
