import { Component, OnInit } from '@angular/core';
import { RegServiceService } from '../services/reg-service.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myservice: RegServiceService, private route: ActivatedRoute) { }
  username:any;
  email:any;
  password:any;
  allstudent: any = [];
  ngOnInit(): void {
    this.username = this.route.snapshot.params["username"];
    this.password = this.route.snapshot.params["password"];
    this.myservice.getPatientByDoctorId(this.username,this.password).subscribe((x) => { this.allstudent = x });
  }




}



