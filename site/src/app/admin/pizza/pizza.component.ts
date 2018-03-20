import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

	pizza;
	insertOrList;
	deleted;

	constructor(
		private http: Http,
		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		this.insertOrList = (this.route.snapshot.params.insertOrList == 'insert') ? true : false;
		this.deleted = (this.route.snapshot.params.insertOrList == 'deleted') ? true : false;

		this.http.get("http://localhost/net_api/web/app_dev.php/menu/pizza")
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.pizza = data;
				}
			)  	
	}

}
