import { Component, OnInit } from '@angular/core';
import { EpmployService } from '../epmploy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(private myservice: EpmployService, private route: ActivatedRoute) { }

  id: any;
  password:any;
  allData: any = [];
  ngOnInit(): void {

    this.id = this.route.snapshot.params["id"];
    this.password = this.route.snapshot.params["password"];
    
    this.myservice.getPatientByDoctorId(this.id,this.password).subscribe((x) => { this.allData = x });

  }



}
