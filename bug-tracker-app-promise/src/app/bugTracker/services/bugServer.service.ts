import { Injectable } from '@angular/core';

import { IBug } from '../models/IBug';

import { BugOperationsService } from './bugOperations.service';

import axios from 'axios';

@Injectable()
export class BugServerService{
	
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private bugOperations : BugOperationsService){

	}
	getAll() : Promise<IBug[]>{
		return axios
			.get(this.baseUrl)
			.then(response => response.data)
	}

	addNew(bugName : string) : Promise<IBug>{
		let bugData = this.bugOperations.createNew(bugName);
		return axios
			.post(this.baseUrl, bugData)
			.then(response => response.data);
	}

	toggle(bugToToggle : IBug) : Promise<IBug>{
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return axios
			.put(`${this.baseUrl}/${toggledBug.id}`, toggledBug)
			.then(response => response.data);	
	}

	remove(bug : IBug) : Promise<any>{
		return axios
			.delete(`${this.baseUrl}/${bug.id}`)
			.then(response => response.data);		
	}
}