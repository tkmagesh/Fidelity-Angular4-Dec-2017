import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
	message : string = '';

	onGreetClick(name : string = ''){
		this.message = 'Hi ' + name + ', Have a nice day!';
	}
}