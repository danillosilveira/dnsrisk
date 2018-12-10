import { Component, OnInit, Renderer2 } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


import { RiskService } from '../../services/risk.service'
import { HomeService } from '../../services/home.service'
import { register } from '../../models/register.model'
import { risk } from '../../models/risk.model'


@Component({
	selector: 'zag-register',
	templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

	register: register
	risks: risk[]
	formRegister: FormGroup

	numberPattern = /^[0-9]*$/
	currencyPattern = /^[0-9]+(\.[0-9]{1,2})?$/
	
	constructor(
		private renderer: Renderer2,
		private riskService: RiskService,
		private homeService: HomeService,
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder) {
		this.renderer.addClass(document.body, 'modal-open')
	}

	ngOnInit() {

		this.formRegister = this.formBuilder.group({
			id: ['', Validators.pattern(this.numberPattern)],
			name: ['', Validators.required],
			limit: ['', [Validators.required, Validators.pattern(this.currencyPattern)]],
			riskId: ['', Validators.required]
		})

		this.route.snapshot.params['id'] &&
			this.homeService.getById(this.route.snapshot.params['id'])
				.subscribe(register => this.formRegister.patchValue(register))

		this.risks = this.riskService.risks
	}

	ngOnDestroy() {
		this.renderer.removeClass(document.body, 'modal-open');
	}

	save(formRegister: register) {
		this.homeService.save(formRegister)
		this.router.navigate(['/'])
	}
}
