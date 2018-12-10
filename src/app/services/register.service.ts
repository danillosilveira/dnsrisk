import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'

import { register } from '../models/register.model'
import { API } from '../app.api'

@Injectable()
export class RegisterService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<register[]> {
        return this.http.get<register[]>(`${API}/registers`)
    }

    getById(id: number): Observable<register> {
        return this.http.get<register>(`${API}/registers/${id}`)
    }

    save(data: register): Observable<register> {
        if(data.id)
            return this.http.put<register>(`${API}/registers/${data.id}`, data)
        return this.http.post<register>(`${API}/registers/`, data)
    }

    removeId(id: number): Observable<register> {
        return this.http.delete<register>(`${API}/registers/${id}`)
    }
}