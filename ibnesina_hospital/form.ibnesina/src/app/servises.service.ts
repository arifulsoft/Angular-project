import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServisesService {

  constructor() { }

  productsArray: any = [
    { id: 101, Name: "sumon", email: "01/02/2010", round:"Rajsahi", gender: "male" },
  { id: 102, Name: "arif", email: "01/02/2010", round: "Netrokuna", gender: "Female" },
    { id: 103, Name: "aziz", email: "01/02/2010", round: "Sherpur", gender: "male" },
    { id: 104, Name: "johir", email: "01/02/2010", round: "Munshiganj", gender: "Female" },
    { id: 105, Name: "Shamim", email: "01/02/2010", round: "Magura", gender: "male" },
    { id: 106, Name: "Topu", email: "01/02/2010", round: "Chandpur", gender: "Female" },
  ];

  getData(){
    return this.productsArray;
  }
}
