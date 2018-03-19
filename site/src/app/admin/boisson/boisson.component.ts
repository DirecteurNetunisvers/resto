import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})

export class BoissonComponent implements OnInit {

	boisson;
	insertOrList;

	constructor(
		private http: Http,
		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		this.insertOrList = (this.route.snapshot.params.insertOrList == 'liste') ? false : true;

		this.http.get("http://localhost/net_api/web/app_dev.php/menu/boisson")
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.boisson = data;
				}
			)  	
	}

}
