import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

	utilisateurs;
	utilisateursCharger = false;
	idUtilisateurTodelete;
	insertOrList;
	deleted;
	modified;

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		public ngxSmartModalService: NgxSmartModalService,
		private router: Router
	) { }

	ngOnInit() {
		this.insertOrList = (this.route.snapshot.params.insertOrList == 'insert') ? true : false;
		this.deleted = (this.route.snapshot.params.insertOrList == 'deleted') ? true : false;
		this.modified = (this.route.snapshot.params.insertOrList == 'modified') ? true : false;

		let url = urlApi + '/utilisateurs';

		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.utilisateurs = data;
					this.utilisateursCharger = (data.length > 0) ? true : false;
				}
			)  	
	}

	supprimerUtilisateur(utilisateur) {
		this.idUtilisateurTodelete = utilisateur.id;
	}	

}
