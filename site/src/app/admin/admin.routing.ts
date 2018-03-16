import { Routes, RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoissonComponent } from './boisson/boisson.component';
import { PizzaComponent } from './pizza/pizza.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'boisson', component: BoissonComponent },
    { path: 'pizza', component: PizzaComponent }
];

export const adminRouting = RouterModule.forChild(routes);
