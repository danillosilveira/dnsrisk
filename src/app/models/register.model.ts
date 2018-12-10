import { risk } from './risk.model'

export interface register {
    id: number,
    name: string,
    limit: number,
    riskId: number,
    risk: risk
}