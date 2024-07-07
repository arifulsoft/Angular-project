import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormComponent } from './form/form.component';
import { ScarchComponent } from './scarch/scarch.component';
import { ShowPostComponent } from './show-post/show-post.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'form',component:FormComponent},
  {path:'search',component:ScarchComponent},
  {path:'form',component:FormComponent},
  {path:'show-post/:enpid/:enpPassword',component:ShowPostComponent},
  {path:'show-post',component:ShowPostComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
