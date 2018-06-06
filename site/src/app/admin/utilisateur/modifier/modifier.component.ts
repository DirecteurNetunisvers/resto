import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response,  } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { urlApi } from '../../../config/host';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-modifier',
	templateUrl: './modifier.component.html',
	styleUrls: ['./modifier.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {

	utilisateur;
	utilisateurPret = false;
	fileUploadedSrc;

	headers: Headers;
    options: RequestOptions;	

	constructor (
		private http: Http,
		private route: ActivatedRoute,
		private router: Router
	) { 
	 	this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });		
	}

	ngOnInit() {
		this.fileUploadedSrc = 'assets/images/profil.png';
		this.prendreUtilisateur();
	}

	prendreUtilisateur() {
		let pseudo = this.route.snapshot.params.pseudo;
		let url = urlApi + '/utilisateur/' + pseudo;
		return this.http.get(url)
			.map(
				(response) => response.json()
			)
            .subscribe(
                data => {
                    this.utilisateur = data;
                    this.utilisateurPret = true;
					if ( data['filename'] !== 'pas_de_photo' ) {
						this.fileUploadedSrc = data.filename;
					}
                },
                error => {
                    console.log(error);
                }
            );		
	}

	onClickSubmit(data) {
		let messageErreur = this.validationFomulaire(data);
		if ( messageErreur ) {
			alert(messageErreur);
			return false;
		}

		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: cpHeaders });

		let url = urlApi + '/utilisateur/' + data.id;
		
		let dataToPut = {
			pseudo       	: data.pseudo,
			email 		  	: data.email,
			nom 		  	: data.nom,
			prenom			: data.prenom,
			role			: data.role
		}

		let body = JSON.stringify(dataToPut);
		this.http.put(
			url,
			body,
			options
		).subscribe(
			res => {
				this.router.navigate(['/admin/utilisateur/liste'])
			},
			err => {
				console.log(err);
				alert('Une erreur est survenue lors de la mise à jour');
			}
		);		
	}

	validationFomulaire(data) {
		let message = '';
		if ( data.pseudo === '' ) message = 'Le champ pseudo ne doit pas être vide';
		if ( data.email === '' ) message = 'Le champ email ne doit pas être vide';
		if ( data.nom === '' ) message = 'Le champ nom ne doit pas être vide';
		if ( data.prenom === '' ) message = 'Le champ prenom ne doit pas être vide';
		if ( data.role === '' ) message = 'Le champ role ne doit pas être vide';

		if ( message != '' ) return message;

		return false; 
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

}
