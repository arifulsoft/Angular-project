import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NabverComponent } from './nabver/nabver.component';
import { MarqueComponent } from './marque/marque.component';
import { CaroselComponent } from './carosel/carosel.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BranchComponent } from './branch/branch.component';
import { FooterComponent } from './footer/footer.component';
import { PatientComponent } from './patient/patient.component';
import { ContuctComponent } from './contuct/contuct.component';
import { TrustComponent } from './trust/trust.component';
import { MissionComponent } from './mission/mission.component';
import { BordComponent } from './bord/bord.component';
import { AwardsComponent } from './awards/awards.component';
import { ProjectComponent } from './project/project.component';
import { FromComponent } from './from/from.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DepartmentComponent } from './department/department.component';
import { DoctornameComponent } from './doctorname/doctorname.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { HospitalserviceComponent } from './hospitalservice/hospitalservice.component';
import { CovidComponent } from './covid/covid.component';
import { DiagnasticserviceComponent } from './diagnasticservice/diagnasticservice.component';
import { LastnewsComponent } from './lastnews/lastnews.component';
import { HalthmagaginComponent } from './halthmagagin/halthmagagin.component';
import { FormsModule } from '@angular/forms';
import { BranchwaisedoctorComponent } from './branchwaisedoctor/branchwaisedoctor.component';
import { ForntpageComponent } from './forntpage/forntpage.component';
import { ServisesService } from './servises.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NabverComponent,
    MarqueComponent,
    CaroselComponent,
    HomeComponent,
    AboutComponent,
    BranchComponent,
    FooterComponent,
    PatientComponent,
    ContuctComponent,
    TrustComponent,
    MissionComponent,
    BordComponent,
    AwardsComponent,
    ProjectComponent,
    FromComponent,
    DoctorComponent,
    DepartmentComponent,
    DoctornameComponent,
    OurserviceComponent,
    HospitalserviceComponent,
    CovidComponent,
    DiagnasticserviceComponent,
    LastnewsComponent,
    HalthmagaginComponent,
    BranchwaisedoctorComponent,
    ForntpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
