import { Component, OnInit } from '@angular/core';
import { RegServiceService } from '../services/reg-service.service';
import { Registration } from '../classes/Registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 
    username: any;
    email: any;
    password: any;

registration:any;

  

  constructor(private myservice:RegServiceService) { }

  ngOnInit(): void {
  }

  save(){
    this.registration=new Registration(this.username,this.email,this.password);
    this.myservice.save(this.registration).subscribe(()=>{
      //this.myservice.getallstudents().subscribe((x)=>{this.allstudent=x});
  
    });
  }
  }
