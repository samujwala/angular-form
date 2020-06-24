import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuardService } from './home/auth-guard.service';
const routes: Routes = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'home', component: HomeComponent,canActivate:[AuthGuardService]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
