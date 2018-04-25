import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { urlApi } from '../../config/host';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({ 
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

	pizzas;
	insertOrList;
	deleted;
	modified
	idPizzaTodelete;
	pizzasCharger = false;
	pizzaToModifier = false;

	headers: Headers;
    options: RequestOptions;	

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		public ngxSmartModalService: NgxSmartModalService,
		private router: Router	
	) {
	 	this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
         }

	ngOnInit() {
		this.insertOrList = (this.route.snapshot.params.insertOrList == 'insert') ? true : false;
		this.deleted = (this.route.snapshot.params.insertOrList == 'deleted') ? true : false;
		this.modified = (this.route.snapshot.params.insertOrList == 'modified') ? true : false;

		let url = urlApi + '/menu/pizza';
		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.pizzas = data;
					this.pizzasCharger = true;
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

	modifierPizza(pizza) {
		this.pizzaToModifier = pizza;
	}

	onClickSubmit(data) {
		let messageErreur = this.validationFomulaire(data);
		if ( messageErreur ) {
			alert(messageErreur);
			return false;
		}

		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: cpHeaders });

		let url = urlApi + '/menu/pizza/' + data.id;
		
		let dataToPut = {
			nom       	: data.nom,
			pm 		  	: data.pm,
			gm 		  	: data.gm,
			ingredient	: data.ingredient
		}

		let body = JSON.stringify(dataToPut);
		this.http.put(
			url,
			body,
			options
		).subscribe(
			res => {
				this.ngxSmartModalService.closeLatestModal();
				this.router.navigate(['/admin/deletepizza/simple_recharge'])
			},
			err => {
				console.log(err);
				alert('Une erreur est survenue lors de la mise à jour');
			}
		);		
	}
	private extractData(res: Response) {
    	console.log('extractData');
        let body = res.json();
    	console.log(body);
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }    

	validationFomulaire(data) {
		let message = '';
		if ( data.nom === '' ) message = 'Le champ nom ne doit pas être vide';
		if ( data.pm === '' ) message = 'Le champ petite ne doit pas être vide';
		if ( data.gm === '' ) message = 'Le champ grande ne doit pas être vide';
		if ( data.ingredient === '' ) message = 'Le champ ingrédient ne doit pas être vide';

		if ( message != '' ) return message;

		return false; 
	}
}
