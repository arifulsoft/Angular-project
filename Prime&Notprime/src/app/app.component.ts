import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AllP';
  x: number = 0;
  y: string = "";
  count = 0;
  msg = "";
  m1() {
    this.count = 0;
    this.msg = "";
    for (var i = 1; i <= this.x; i++) {
      if (this.x % i == 0) {
        this.count++;

      }

    }
    if (this.count == 2) {
      this.msg = "This is a prime number"
    } else {
      this.msg = "This is a not prime number"
    }

  }

}
