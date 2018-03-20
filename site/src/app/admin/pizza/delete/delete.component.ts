import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeletePizzaComponent implements OnInit {

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		private router: Router,
		) { }

	ngOnInit() {
		let id = this.route.snapshot.params.id;
		this.deletePizzaById(id);
	}

	deletePizzaById(id) {
		let url = 'http://localhost/net_api/web/app_dev.php/menu/pizza/' + id;
	    return this.http.delete(url).subscribe(
			res => {
				this.router.navigate(['/admin/pizza/deleted']);
			},
			err => {
				console.log('delete error');
			}
		);    
	}   

}
