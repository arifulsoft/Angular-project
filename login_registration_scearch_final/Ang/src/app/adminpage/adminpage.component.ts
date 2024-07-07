import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

 

  ngOnInit(): void {
  }

  data:any;
  constructor(private router:Router) { 
    this.data=this.router.getCurrentNavigation()?.extras.state?.["response"];
  }
}
