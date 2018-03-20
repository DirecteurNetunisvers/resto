import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
	boissons;

	constructor(
		private http: Http
	) { }

	ngOnInit() {
		this.http.get("http://localhost/net_api/web/app_dev.php/menu/pizza")
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.pizza = data;
				}
			);

		this.http.get("http://localhost/net_api/web/app_dev.php/menu/boisson")
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.boissons = data;
				}
			);			
	}

}
