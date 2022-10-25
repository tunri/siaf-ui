import { Component } from '@angular/core';
import { dataMenu } from './data';
declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'design-system';
	menu = dataMenu;
	ngOnInit() { }
	menuMobile() {
		$('#siaf-aside').toggleClass('show');
		$('#siaf-backdrop').toggleClass('show');
	}
}
