import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private myservice:PostService) { }
  allstudent:any=[];
  ngOnInit(): void {
    this.myservice.getallstudents().subscribe((x)=>{this.allstudent=x});
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
  
    
    
}
