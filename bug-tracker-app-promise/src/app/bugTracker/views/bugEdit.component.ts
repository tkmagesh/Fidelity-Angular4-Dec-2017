import { Component, Output, EventEmitter } from '@angular/core';

import { IBug } from '../models/IBug';

import { BugServerService } from '../services/bugServer.service';


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

	constructor(private bugServer : BugServerService){
	}
	onCreateClick() : void {
		this.bugServer
			.addNew(this.newBugName)
			.then(newBug => this.bugCreated.emit(newBug));
	}

}