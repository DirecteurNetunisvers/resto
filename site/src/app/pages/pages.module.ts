import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PizzaComponent } from './pizza/pizza.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, PizzaComponent],
  exports: [HomeComponent]
})
export class PagesModule { }
