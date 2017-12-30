import { Injectable } from '@angular/core';

import { IBug } from '../models/IBug';

import { BugOperationsService } from './bugOperations.service';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

//Dont do the below
//import 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class BugServerService{
	
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private bugOperations : BugOperationsService, private http : Http){

	}
	getAll() : Observable<IBug[]>{
		return this.http
			.get(this.baseUrl)
			.map(response => response.json())
	}

	addNew(bugName : string) : Observable<IBug>{
		let bugData = this.bugOperations.createNew(bugName);
		return this.http
			.post(this.baseUrl, bugData)
			.map(response => response.json());
	}

	toggle(bugToToggle : IBug) : Observable<IBug>{
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return this.http
			.put(`${this.baseUrl}/${toggledBug.id}`, toggledBug)
			.map(response => response.json());	
	}

	remove(bug : IBug) : Observable<any>{
		return this.http
			.delete(`${this.baseUrl}/${bug.id}`)
			.map(response => response.json());		
	}
}