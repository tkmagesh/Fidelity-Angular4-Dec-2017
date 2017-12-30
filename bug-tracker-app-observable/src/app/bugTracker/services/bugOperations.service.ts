import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(bugName : string, id : number = 0 ) : IBug{
		return {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
	}

	toggle(bugToToggle : IBug) : IBug {
		return {...bugToToggle, isClosed : !bugToToggle.isClosed};
	}
}