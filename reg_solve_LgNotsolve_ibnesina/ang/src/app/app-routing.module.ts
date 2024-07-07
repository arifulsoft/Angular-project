import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CaroselComponent } from './carosel/carosel.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'TopHeaderComponent', component: TopHeaderComponent },
  { path: 'CaroselComponent', component: CaroselComponent },
  { path: 'AboutPageComponent', component: AboutPageComponent },
  { path: 'Registration', component: RegistrationComponent },
  {path:'show_patient/:id/:password',component:LoginComponent},
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent }
  
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
