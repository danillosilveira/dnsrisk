import { Injectable } from '@angular/core'
import { RegisterService } from './register.service'
import { RiskService } from './risk.service'
import { register } from '../models/register.model'

@Injectable()
export class HomeService {

    registers: register[]

    constructor(
        private registerService: RegisterService,
        private riskService: RiskService
    ) { }

    getAll() {
        this.registerService.getAll().subscribe(register => this.registers = register)
    }

    getById(id: number) {
        return this.registerService.getById(id)
    }

    save(item: register) {
        let search = this.registers.find(it => it.id === item.id)
        if (search) {
            this.registerService.save(item)
                .subscribe(register => {
                    let index = this.registers.indexOf(search)
                    this.registers[index] = register
                })
        } else {
            this.registerService.save(item)
                .subscribe(register => this.registers.push(register))
        }
    }

    change(item: register) {
        this.registers.splice(this.registers.indexOf(item), 1)
    }

    remove(item: register) {
        this.registerService.removeId(item.id)
            .subscribe(() => {
                this.registers.splice(this.registers.indexOf(item), 1)
            })
    }

    clear() {
        this.registers = []
    }
}