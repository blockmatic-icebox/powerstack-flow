import { NftDetailProps } from './nft-detail.type'

export function NftDetail({ nft }: NftDetailProps) {
  return (
    <div>
      <pre>{JSON.stringify(nft, null, 2)}</pre>
    </div>
  )
}
