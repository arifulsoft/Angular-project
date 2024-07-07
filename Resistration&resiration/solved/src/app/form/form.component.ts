import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EpmployService } from '../epmploy.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private myservice:EpmployService) { }

  ngOnInit(): void {
  }

  empid:any;
  empname:any;
  empemail:any;
  emppassword:any
  employeData:any;
  save(){
    this.employeData=new Employe(this.empid,this.empname,this.empemail,this.emppassword);
    this.myservice.save(this.employeData).subscribe(()=>{

  
    });
  }
}
