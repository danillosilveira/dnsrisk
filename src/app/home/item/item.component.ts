import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

import { RiskService } from 'src/app/services/risk.service'
import { register } from '../../models/register.model'

@Component({
	selector: 'zag-item',
	templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {

	@Input() register: register

	@Output() removeEvent = new EventEmitter()

	constructor(private riskService: RiskService) { }

	ngOnInit() { }

	getRisk() {
		return this.riskService.getById(this.register.riskId)
	}

	remove() {
		this.removeEvent.emit(this.register)
	}
}
