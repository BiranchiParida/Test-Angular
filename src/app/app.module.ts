import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
 //import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 import {AppRouterModule } from './app-routing.module';
  import {HomeService} from './home/home.service';
  import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { interceptclass } from './app.intercept';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRouterModule//RouterModule.forRoot(appRoute)
  ],
  providers: [HomeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: interceptclass,
      multi: true,
      
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
