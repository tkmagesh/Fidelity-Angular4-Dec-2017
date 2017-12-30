import { Component, Output, EventEmitter } from '@angular/core';
import { BugStorageService } from '../services/bugStorageService';
import { IBug } from '../models/IBug';

import axios from 'axios';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create New" (click)="onCreateClick()">
		</section>
	`
})
export class BugEditComponent{
	
	newBugName : string = '';

	@Output()
	bugCreated : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugStorage : BugStorageService){
	}
	onCreateClick() : void {
		let newBugData = {
			id : 0,
			name : this.newBugName,
			isClosed : false,
			createdAt : new Date()
		};

		axios.post('http://localhost:3000/bugs', newBugData)
			.then(response => this.bugCreated.emit(response.data));
		
	}

}