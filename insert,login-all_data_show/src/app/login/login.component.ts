import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private myservice: PostService) { }

  ngOnInit(): void {
  }
  id: any;
  password: any;
  obj: any;
  p: any[] = [];

  m1() {
    this.p = this.myservice.getData().slice();
    this.obj = this.p.find(x => (x.id == this.id) && (x.password == this.password))
    if (this.obj != null) {
      this.myservice.data = this.obj;
      this.router.navigateByUrl("creataccount");
    } else {
      this.router.navigateByUrl("showpost");
    }
  }
}
