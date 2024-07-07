import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  ngOnInit(): void {
  }

  x: number = 0;
  y: string = "";
  z:string="";
  round:any=0;
  gender:any="";

  product: any = {}
  p:any=[]

 constructor(private myservice:StudentService){
  this.p = this.myservice.getData().slice();
 }



  Add() {


    this.product = { id: this.x, Name: this.y,email:this.z,round:this.round,gender:this.gender };
    this.myservice.getData().push(this.product);
    this.x = 0;
    this.y = "";
    alert("Data added");
  }

  Show(){
  // this.p=[];
    this.p = this.myservice.getData().slice();
  }

}
