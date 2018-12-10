import { Component, OnInit } from '@angular/core'
import { register } from '../models/register.model'
import { HomeService } from '../services/home.service'

@Component({
	selector: 'zag-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	constructor(private homeService: HomeService) { }

	ngOnInit() { 
		this.homeService.getAll()
	}

	registers(): register[] {
		return this.homeService.registers
	}

	open() : boolean {
		return this.homeService.registers && this.homeService.registers.length > 0
	}

	remove(formRegister: register) {
		this.homeService.remove(formRegister)
	}
}
