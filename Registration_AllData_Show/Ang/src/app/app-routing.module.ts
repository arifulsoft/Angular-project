import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowpostComponent } from './showpost/showpost.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'showpost',component:ShowpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
