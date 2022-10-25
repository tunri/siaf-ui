import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-badge',
	templateUrl: './badge.component.html',
	styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	badgeStyle = `   // badges
   <span class="badge bg-secondary text-black">Certificación</span>
   <span class="badge bg-warning">5 Metas</span>
   <span class="badge bg-success">Success</span>
   <span class="badge bg-danger">Danger</span>
   <span class="badge bg-info">Info</span>`;
	badgeSize = `   // badges
   <span class="badge badge-lg bg-secondary text-black">Compromiso mensual</span>
   <span class="badge badge-lg bg-warning">5 Metas</span>`;

}
