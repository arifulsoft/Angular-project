import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { EpmployService } from './epmploy.service';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { ScarchComponent } from './scarch/scarch.component';
import { ShowPostComponent } from './show-post/show-post.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    SuccessComponent,
    ScarchComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EpmployService],
  bootstrap: [AppComponent]
})
export class AppModule { }
