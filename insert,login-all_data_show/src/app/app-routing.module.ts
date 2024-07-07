import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { ShowpostComponent } from './showpost/showpost.component';
import { BankComponent } from './bank/bank.component';
import { LoginComponent } from './login/login.component';
import { CreataccountComponent } from './creataccount/creataccount.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'bank', component: BankComponent },
  { path: 'form', component: FormComponent },
  { path: 'showpost', component: ShowpostComponent },
  { path: 'creataccount', component: CreataccountComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
