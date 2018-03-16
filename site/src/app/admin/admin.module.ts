import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Router, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { adminRouting } from './admin.routing';
import { BoissonComponent } from './boisson/boisson.component';
import { PizzaComponent } from './pizza/pizza.component';
// import { RegisterComponent } from './register/register.component';
// import { AlertComponent } from '../_directives/alert/alert.component';
// import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    adminRouting,
    FormsModule,
    HttpModule
    // AlertComponent
  ],
  declarations: [
    DashboardComponent,
    BoissonComponent,
    PizzaComponent,
    // RegisterComponent,
    // LoginComponent
  ],
  providers: [
    HttpClientModule
  ]
})
export class AdminModule { }
