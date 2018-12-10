import { RiskService } from '../services/risk.service'

export function riskProviderFactory(provider: RiskService) {
    return () => provider.load()
}
