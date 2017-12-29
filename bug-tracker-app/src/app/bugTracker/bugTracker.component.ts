import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorageService';

import * as moment from 'moment';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	closedCount : number = 0;

	sortBugBy : string = 'name';

	sortByDescending : boolean = false;

	

	

	constructor(private bugStorage : BugStorageService){
		console.log(moment('29-Dec-2017 02:19:40 PM').fromNow());
		this.bugs = this.bugStorage.getAll();
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug) : void {
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick() : void {
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bugToRemove => this.bugStorage.remove(bugToRemove));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	

}