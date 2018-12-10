import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core'
import { NgModel, FormControlName } from '@angular/forms'

@Component({
	selector: 'zag-ipt-container',
	templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

	@Input() label: string
	@Input() errorMessage: string

	ipt: any

	@ContentChild(NgModel) model: NgModel
	@ContentChild(FormControlName) control: FormControlName

	constructor() { }

	ngOnInit() { }

	ngAfterContentInit(): void {
		this.ipt = this.model || this.control
		if (this.ipt === undefined)
			throw new Error("Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName")
	}

	hasSuccess(): boolean {
		return this.ipt.valid && (this.ipt.dirty || this.ipt.touched)
	}

	hasError(): boolean {
		return this.ipt.invalid && (this.ipt.dirty || this.ipt.touched)
	}

}
