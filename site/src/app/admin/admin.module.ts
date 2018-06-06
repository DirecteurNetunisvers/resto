import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Router, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { ImageUploadModule } from "angular2-image-upload";

import { DashboardComponent } from './dashboard/dashboard.component';
import { adminRouting } from './admin.routing';
import { BoissonComponent } from './boisson/boisson.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AjoutPizzaComponent } from './pizza/ajout/ajout.component';
import { AjoutBoissonComponent } from './boisson/ajout/ajout.component';
import { DeletePizzaComponent } from './pizza/delete/delete.component';
import { DeleteBoissonComponent } from './boisson/delete/delete.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AjoutUtilisateurComponent } from './utilisateur/ajout/ajout.component';
import { DeleteUtilisateurComponent } from './utilisateur/delete/delete.component';
import { ModifierUtilisateurComponent } from './utilisateur/modifier/modifier.component';
// import { RegisterComponent } from './register/register.component';
// import { AlertComponent } from '../_directives/alert/alert.component';
// import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    adminRouting,
    FormsModule,
    HttpModule,
    NgxSmartModalModule.forRoot(),
    ImageUploadModule.forRoot(),
    // AlertComponent
  ],
  declarations: [
    DashboardComponent,
    BoissonComponent,
    PizzaComponent,
    AjoutPizzaComponent,
    AjoutBoissonComponent,
    DeletePizzaComponent,
    DeleteBoissonComponent,
    UtilisateurComponent,
    AjoutUtilisateurComponent,
    DeleteUtilisateurComponent,
    ModifierUtilisateurComponent,
    // RegisterComponent,
    // LoginComponent
  ],
  providers: [
    HttpClientModule,
    NgxSmartModalService
  ]
})
export class AdminModule { }
