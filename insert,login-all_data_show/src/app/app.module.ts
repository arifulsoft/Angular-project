import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './service/post.service';
import { ShowpostComponent } from './showpost/showpost.component';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { BankComponent } from './bank/bank.component';
import { LoginComponent } from './login/login.component';
import { DatapageComponent } from './datapage/datapage.component';
import { CreataccountComponent } from './creataccount/creataccount.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowpostComponent,
    FormComponent,
    TableComponent,
    BankComponent,
    LoginComponent,
    DatapageComponent,
    CreataccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
