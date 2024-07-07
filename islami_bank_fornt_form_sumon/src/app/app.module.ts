import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { CaroselComponent } from './carosel/carosel.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContuctComponent } from './contuct/contuct.component';
import { PatientComponent } from './patient/patient.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    CaroselComponent,
    ParagraphComponent,
    TableComponent,
    HomeComponent,
    AboutComponent,
    ContuctComponent,
    PatientComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
