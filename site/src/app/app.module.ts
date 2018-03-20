import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';


// import { PagesModule } from './pages/pages.module';

// rooting
import { routing } from './app.routing';

// components for layout
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './_layout/admin-header/admin-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { AdminSidebarComponent } from './_layout/admin-sidebar/admin-sidebar.component';

// directives
import { AlertComponent } from './_directives/alert/alert.component';

// Services
import { AlertService, AuthenticationService} from './_services/index';
import { AuthGuardService } from './_auth/auth-guard.service';
import { UsersService } from './_services/table/users.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
// import { JwtInterceptor } from './_helpers';


@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    PizzaComponent,
    AdminHeaderComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    AdminSidebarComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    // PagesModule,
    routing,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZeDurG5gamvy7AGTl-zerIuq-kzoNrRc'
    })
  ],
  providers: [
    AuthGuardService,
    AlertService,
    AuthenticationService,
    UsersService,
   /*  {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }, */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
