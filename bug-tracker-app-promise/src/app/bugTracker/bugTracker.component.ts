import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugServerService } from './services/bugServer.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];

	closedCount : number = 0;

	sortBugBy : string = 'name';

	sortByDescending : boolean = false;

	
	ngOnInit(){
		this.bugServer
			.getAll()
			.then(bugs => this.bugs = bugs);
	}
	

	constructor(private bugServer : BugServerService){
		
		
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug) : void {
		this.bugServer
			.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug));
		
	}

	onRemoveClosedClick() : void {
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bugToRemove => this.bugServer.remove(bugToRemove));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	

}