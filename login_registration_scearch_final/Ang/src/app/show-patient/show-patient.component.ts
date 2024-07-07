import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  constructor(private myservice: AppointmentService, private route: ActivatedRoute) { }

  id: any;
  password:any;
  allstudent: any = [];
  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"];
    this.password = this.route.snapshot.params["password"];
    
    this.myservice.getPatientByDoctorId(this.id,this.password).subscribe((x) => { this.allstudent = x });

  }
  




  // save() {
  //   this.appointment = new AppointmentTable(this.a_id, this.p_name, this.date, this.phone, this.problem, this.dept_name, this.email, this.d_id);
  //   this.myservice.save(this.appointment).subscribe((x) => {this.allstudent = x });   
  // }

}


