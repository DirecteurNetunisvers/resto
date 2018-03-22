import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {

	boissons;

	constructor(
		private http: Http
	) { }

	ngOnInit() {
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
