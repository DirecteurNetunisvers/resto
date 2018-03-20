import { Routes, RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoissonComponent } from './boisson/boisson.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AjoutPizzaComponent } from './pizza/ajout/ajout.component';
import { AjoutBoissonComponent } from './boisson/ajout/ajout.component';
import { DeletePizzaComponent } from './pizza/delete/delete.component';
import { DeleteBoissonComponent } from './boisson/delete/delete.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'boisson/:insertOrList', component: BoissonComponent },
    { path: 'pizza/:insertOrList', component: PizzaComponent },
    { path: 'ajoutpizza', component: AjoutPizzaComponent },
    { path: 'deletepizza/:id', component: DeletePizzaComponent },
    { path: 'ajoutboisson', component: AjoutBoissonComponent },
    { path: 'deleteboisson/:id', component: DeleteBoissonComponent },
];

export const adminRouting = RouterModule.forChild(routes);
