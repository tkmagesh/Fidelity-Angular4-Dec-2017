import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

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

	/*private bugOperations : BugOperationsService;*/

	constructor(private bugOperations : BugOperationsService){
		/*this.bugOperations = bugOperations;*/
	}

	onCreateClick() : void {
		let newBug : IBug = this.bugOperations.createNew(this.newBugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug) : void {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick() : void {
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	

}