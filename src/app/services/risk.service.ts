import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'

import { risk } from '../models/risk.model'
import { API } from '../app.api'

@Injectable()
export class RiskService {

    risks: risk[]

    constructor(private http: HttpClient) { }

    load() {
        this.getAll().subscribe(risks => this.risks = risks)
    }

    getAll(): Observable<risk[]> {
        return this.http.get<risk[]>(`${API}/risks`)
    }

    getById(id: number): risk {
        return this.risks.find(it => it.id === id)
    }
}