import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorageService';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	closedCount : number = 0;

	sortBugBy : string = 'name';

	sortByDescending : boolean = false;

	newBugName : string = '';

	

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}

	onCreateClick() : void {
		let newBug : IBug = this.bugStorage.addNew(this.newBugName);
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