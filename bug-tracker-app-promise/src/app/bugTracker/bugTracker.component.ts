import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugServerService } from './services/bugServer.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];

	sortBugBy : string = 'name';

	sortByDescending : boolean = false;

	constructor(private bugServer : BugServerService){
			
	}

	/*ngOnInit(){
		this.bugServer
			.getAll()
			.then(bugs => this.bugs = bugs);
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
	}*/

	async ngOnInit(){
		this.bugs = await this.bugServer.getAll();
			
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	async onBugClick(bugToToggle : IBug) : void {
		let toggledBug = await this.bugServer.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}

	onRemoveClosedClick() : void {
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bugToRemove => this.bugServer.remove(bugToRemove));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	

}