import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PatientComponent } from './patient/patient.component';
import { ContuctComponent } from './contuct/contuct.component';
import { HospitalserviceComponent } from './hospitalservice/hospitalservice.component';
import { CovidComponent } from './covid/covid.component';
import { DiagnasticserviceComponent } from './diagnasticservice/diagnasticservice.component';
import { TrustComponent } from './trust/trust.component';
import { MissionComponent } from './mission/mission.component';
import { BordComponent } from './bord/bord.component';
import { AwardsComponent } from './awards/awards.component';
import { ProjectComponent } from './project/project.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HalthmagaginComponent } from './halthmagagin/halthmagagin.component';
import { BranchwaisedoctorComponent } from './branchwaisedoctor/branchwaisedoctor.component';
import { ForntpageComponent } from './forntpage/forntpage.component';

const routes: Routes = [
  {path:'',component:ForntpageComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'patient',component:PatientComponent},
  {path:'contuct',component:ContuctComponent},
  {path:'patient',component:PatientComponent},
  {path:'hospitalservice',component:HospitalserviceComponent},
  {path:'covid',component:CovidComponent},
  {path:'diagnasticservice',component:DiagnasticserviceComponent},
  {path:'trust',component:TrustComponent},
  {path:'mission',component:MissionComponent},
  {path:'bord',component:BordComponent},
  {path:'awards',component:AwardsComponent},
  {path:'project',component:ProjectComponent},
  {path:'diagnasticservice',component:DiagnasticserviceComponent},
  {path:'department',component:DepartmentComponent},
  {path:'doctorname',component:DoctorComponent},
  {path:'hospitalservice',component:HospitalserviceComponent},
  {path:'diagnasticservice',component:DiagnasticserviceComponent},
  {path:'halthmagagin',component:HalthmagaginComponent},
  {path:'branchwaisedoctor',component:BranchwaisedoctorComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
