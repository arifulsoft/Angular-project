import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContuctComponent } from './contuct/contuct.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  // {path:'home', component:HomeComponent},
  // {path:'', component:HomeComponent},
  // {path:'contuct', component:ContuctComponent},
  // {path:'patient', component:PatientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
