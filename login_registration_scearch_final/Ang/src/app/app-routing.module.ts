import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { PetianeloginComponent } from './petianelogin/petianelogin.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'show_patient',component:ShowPatientComponent},
  {path:'show_patient/:id',component:ShowPatientComponent},
  {path:'search',component:SearchComponent},
  {path:'footer',component:FooterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'petianelogin',component:PetianeloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
