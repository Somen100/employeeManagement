import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent,
  data: {
    title: 'home',
    breadcrumb: [
      {
        label: 'home',
        url: ''
      }
    ]
  },
},
  {path:'dashboard',component:DashboardComponent},
  {path:'employee',component:EmployeeFormComponent}

  // {path:'home',component:HomeComponent}
  // {path:'home',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
