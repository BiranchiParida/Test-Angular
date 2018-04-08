
import { NgModule } from '@angular/core';
 import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


 const appRoute:Routes=[{ path:'home',component:HomeComponent}
 ,{path:'employee/:order',component:EmployeeComponent},
 {
   path:'' ,redirectTo:'/home',pathMatch:'full'
 },
{path:"**",component:PageNotFoundComponent}
]
@NgModule({
  imports: 
  [
    RouterModule.forRoot(appRoute)//appRoute withiut it will work but it will not shown in compile time error
  ],
  exports:[RouterModule]//  it should export s to main module becaause it will throw error <router-outlet> not valid
})
export class AppRouterModule { }
