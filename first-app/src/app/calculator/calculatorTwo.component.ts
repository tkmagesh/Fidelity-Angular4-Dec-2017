import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-two',
	template : `
		<h3>Calculator - 2</h3>
		<hr>
		<input type="number" [(ngModel)]="model.n1">
		<select #operator>
			<option value="add">Add</option>
			<option value="subtract">Subtract</option>
			<option value="multiply">Multiply</option>
			<option value="divide">Divide</option>
		</select>
		<input type="number" [(ngModel)]="model.n2">
		<input type="button" value="Calculate" (click)="model[operator.value]()">
		<calculator-result [data]="model.result"></calculator-result>
	`
})
export class CalculatorTwoComponent{
	
	model : CalculatorModel = new CalculatorModel();

}