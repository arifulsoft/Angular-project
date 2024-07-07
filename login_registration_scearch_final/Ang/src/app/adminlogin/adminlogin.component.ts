import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myservice: AppointmentService, private router: Router) { }
  a_id: any;
  p_name: any;
  loginUser: any;
  ngOnInit(): void {
  }
  login() {
    this.myservice.loginById(this.a_id, this.p_name).subscribe((x) => {
      this.loginUser = x;
      if ((this.loginUser != null)) {
        this.router.navigateByUrl("adminpage", { state: { response: this.loginUser } });
      } else {
        this.router.navigateByUrl("fail");
      }
    });



  }
}
