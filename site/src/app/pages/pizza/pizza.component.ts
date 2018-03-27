import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { urlApi } from '../../config/host';

@Component({
	selector: 'app-pizza',
	templateUrl: './pizza.component.html',
	styleUrls: [
		'./pizza.component.css',
		'./fonts-googleapis-component.css'
	]
})
export class PizzaComponent implements OnInit {

	pizza;
	pizzasCharger = false;

	constructor(
		private http: Http
	) { }

	ngOnInit() {
		let url = urlApi + '/menu/pizza';
		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.pizza = data;
					this.pizzasCharger = true;
				}
			);		
	}

}
