import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-petianelogin',
  templateUrl: './petianelogin.component.html',
  styleUrls: ['./petianelogin.component.css']
})
export class PetianeloginComponent implements OnInit {

  constructor(private myservice: AppointmentService, private router: Router) { }

  ngOnInit(): void {
  }
  a_id: any;
  patient: any;
  m1() {
    this.myservice.patientId(this.a_id).subscribe((x) => {
      this.patient = x;
    
    });



  }

}
