import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

	pizzas;
	insertOrList;
	deleted;
	idPizzaTodelete;

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		public ngxSmartModalService: NgxSmartModalService
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
					this.pizzas = data;
				}
			)  	
	}

	// ngAfterViewInit() {
	// 	const obj: Object = this.boissonCourant;
	// 	this.ngxSmartModalService.setModalData(obj, 'myModal');
	// }

	supprimerPizza(pizza) {
		this.idPizzaTodelete = pizza.id;
	}	

}
