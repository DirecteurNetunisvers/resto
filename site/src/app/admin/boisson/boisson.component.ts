import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})

export class BoissonComponent implements OnInit {

	constructor(private http: Http) { }

	ngOnInit() {
		this.http.get("http://localhost/net_api/web/app_dev.php/menu/boisson")
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => console.log(data)
			)  	
	}

	onClickSubmit(data) {
		this.http.post(
			'http://localhost/net_api/web/app_dev.php/menu/boisson', 
			data
		).subscribe(
			res => {
				console.log(res);
			},
			err => {
				console.log("Error occured");
			}
		);      
	}

}
