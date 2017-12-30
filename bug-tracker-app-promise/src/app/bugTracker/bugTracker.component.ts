import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorageService';

import axios from 'axios';

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
		//this.bugs = this.bugStorage.getAll();
		axios.get('http://localhost:3000/bugs')
			.then(response => this.bugs = response.data);
	}
	

	constructor(private bugStorage : BugStorageService){
		
		
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug) : void {
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		axios.put(`http://localhost:3000/bugs/${toggledBug.id}`, toggledBug)
			.then(response => this.bugs = this.bugs.map(bug => bug.id === response.data.id ? response.data : bug))
		
	}

	onRemoveClosedClick() : void {
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bugToRemove => axios.delete(`http://localhost:3000/bugs/${bugToRemove.id}`));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	

}