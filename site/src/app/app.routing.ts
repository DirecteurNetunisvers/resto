import { Routes, RouterModule } from '@angular/router';

// Layout
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';

// Component
import { HomeComponent } from './pages/home/home.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { RegisterComponent } from './register/register.component';

// Guard
import { AuthGuardService as AuthGuard } from './_auth/auth-guard.service';

const appRoutes: Routes = [

    // Site routes goes here
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'about', component: HomeComponent },
            { path: 'pizza', component: PizzaComponent },
        ]
    },

    // App routes goes here here
    // { path: 'admin', redirectTo: 'admin/dashboard' },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', loadChildren: './admin/admin.module#AdminModule' },
        ],
    },

    // no layout routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
