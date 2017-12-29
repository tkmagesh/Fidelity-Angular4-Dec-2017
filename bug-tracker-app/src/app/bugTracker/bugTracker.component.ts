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

	/*private bugOperations : BugOperationsService;*/

	constructor(private bugOperations : BugOperationsService){
		/*this.bugOperations = bugOperations;*/
	}

	onCreateClick(bugName : string) : void {
		let newBug : IBug = this.bugOperations.createNew(bugName);
		this.bugs.push(newBug);
	}

	onBugClick(bug : IBug) : void {
		this.bugOperations.toggle(bug);	
	}

	onRemoveClosedClick() : void {
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	

}