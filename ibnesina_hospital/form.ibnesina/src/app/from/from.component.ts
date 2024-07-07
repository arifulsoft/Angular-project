import { Component, OnInit } from '@angular/core';
import { ServisesService } from '../servises.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {



  ngOnInit(): void {
  }

  x: number = 0;
  y: string = "";
  z:string="";
  round:any=0;
  gender:any="";

  product: any = {}
  p:any=[]

 constructor(private myservice:ServisesService){
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
