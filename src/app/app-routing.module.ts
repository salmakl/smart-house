import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DevicesComponent } from './pages/devices/devices.component';

const routes: Routes = [
  { 
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'devices',
    component: DevicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
