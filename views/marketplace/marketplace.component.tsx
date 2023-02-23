import { MarketplaceProps } from './marketplace.type'

export function Marketplace({ marketplace }: MarketplaceProps) {
  return (
    <div>
      <pre>{JSON.stringify(marketplace, null, 2)}</pre>
    </div>
  )
}
