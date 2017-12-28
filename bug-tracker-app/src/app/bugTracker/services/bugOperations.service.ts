import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(bugName : string) : IBug{
		return {
			name : bugName,
			isClosed : false
		};
	}

	toggle(bugToToggle : IBug) : void{
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}
}