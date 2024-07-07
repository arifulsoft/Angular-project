import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NevberComponent } from './nevber/nevber.component';
import { CaroselComponent } from './carosel/carosel.component';
import { MarqueComponent } from './marque/marque.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { CartpicComponent } from './cartpic/cartpic.component';
import { FooterComponent } from './footer/footer.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SearchComponent } from './search/search.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';

import { FormsModule } from '@angular/forms';
import { AppointmentService } from './appointment.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ForntComponent } from './fornt/fornt.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { FailComponent } from './fail/fail.component';
import { PetianeloginComponent } from './petianelogin/petianelogin.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NevberComponent,
    CaroselComponent,
    MarqueComponent,
    ParagraphComponent,
    CartpicComponent,
    FooterComponent,
    MyaccountComponent,
    AppointmentComponent,
    SearchComponent,
    ShowPatientComponent,
    HomeComponent,
    ForntComponent,
    AdminloginComponent,
    AdminpageComponent,
    FailComponent,
    PetianeloginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
    
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
