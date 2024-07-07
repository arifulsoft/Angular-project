import { Component, OnInit } from '@angular/core';
import { ContructService } from '../model/contruct.service';
import { Contruct } from '../classes/contruct';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private myservice:ContructService) { }

  ngOnInit(): void {
  }
  id:any;
  name:any;
  email:any;
  password:any
  employeData:any;
  save(){
    this.employeData=new Contruct(this.id,this.name,this.email,this.password);
    this.myservice.save(this.employeData).subscribe(()=>{

  
    });
  }
}
