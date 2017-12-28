import { Component } from '@angular/core';

@Component({
	selector : 'products-list',
	template : `
		<ol>
			<li *ngFor="let product of products">{{product}}</li>
		</ol>
	`

})
export class ProductsListComponent{
	products : string [] = ['Pen', 'Pencil', 'Marker'];
}