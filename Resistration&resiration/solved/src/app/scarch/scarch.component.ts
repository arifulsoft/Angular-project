import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scarch',
  templateUrl: './scarch.component.html',
  styleUrls: ['./scarch.component.css']
})
export class ScarchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  id: any;
  password: any;

  login() {
    this.router.navigateByUrl("show-post/" + this.id + "/" + this.password);
  }
}
