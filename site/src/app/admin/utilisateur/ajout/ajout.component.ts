import { Component, OnInit } from '@angular/core';
import { urlApi } from '../../../config/host';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutUtilisateurComponent implements OnInit {
	form;
	file;
	fileUploadedSrc;
	constructor(
		private http: Http,
		private router: Router
	) { }

	ngOnInit() {
		this.fileUploadedSrc = 'assets/images/profil.png';
	}

	onUploadFinished(event: EventTarget) {
	    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
		let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
	    let files: FileList = target.files;
	    this.file = files[0];

		this.uploadImage()
			.map(
				(response) => response.json()
			)			
			.subscribe(
				res	=> {
					let host = urlApi.split('/app_dev.php');
					this.fileUploadedSrc = host[0] + res.filename;
				}, 
				err => {
					console.log(err);
					alert(err);
				}
			);
	}	

	onClickSubmit(data) {
		let messageErreur = this.validationFomulaire(data);
		if ( messageErreur ) {
			alert(messageErreur);
			return false;
		}

		data.filename = this.fileUploadedSrc !== 'assets/images/profil.png' 
							? this.fileUploadedSrc
							: 'pas_de_photo' 

		this.ajouterUtilisateur(data);
	}

	uploadImage() {
		this.form = document.getElementById("photoForm");
		let data = new FormData(this.form);

		let url = urlApi + '/uploads';
		return this.http.post(
			url,
			data
		);
	}

	ajouterUtilisateur(utilisateur) {
		let url = urlApi + '/utilisateur';
		return this.http.post(
			url,
			utilisateur
		).subscribe(
			res => {
				this.router.navigate(['/admin/utilisateur/liste']);
			},
			err => {
				console.log(err);
				alert('Oups! Une erreur est survenue');
			}
		);
	}

	validationFomulaire(data) {
		let message = '';
		if ( data.password === '' ) message = 'Le champ password ne doit pas être vide';
		if ( data.role === '' ) message = 'Le champ role ne doit pas être vide';
		if ( data.prenom === '' ) message = 'Le champ prenom ne doit pas être vide';
		if ( data.nom === '' ) message = 'Le champ nom ne doit pas être vide';
		if ( data.email === '' ) message = 'Le champ email ne doit pas être vide';
		if ( data.pseudo === '' ) message = 'Le champ pseudo ne doit pas être vide';

		if ( message != '' ) return message;

		return false;
	}

}
