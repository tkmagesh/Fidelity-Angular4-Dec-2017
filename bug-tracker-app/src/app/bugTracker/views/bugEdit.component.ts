import { Component, Output, EventEmitter } from '@angular/core';
import { BugStorageService } from '../services/bugStorageService';
import { IBug } from '../models/IBug';

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
		let newBug : IBug = this.bugStorage.addNew(this.newBugName);
		//this.bugs = [...this.bugs, newBug];
		this.bugCreated.emit(newBug);
	}

}