import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	closedCount : number = 0;

	onCreateClick(bugName : string) : void {
		let newBug : IBug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugClick(bug : IBug) : void {
		bug.isClosed = !bug.isClosed;
	}

	onRemoveClosedClick() : void {
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount() : number {
		return this.bugs.reduce((prevResult, bug) => 
			bug.isClosed ? ++prevResult : prevResult, 0);
	}

}