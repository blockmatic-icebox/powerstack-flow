import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { serverResponse } from '~/lib/ssr'
import { getNft } from '~/services/market'

export default function PageNFT({ nft }: PageNFTProps) {
  return (
    <div>
      <pre>{JSON.stringify(nft, null, 2)}</pre>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<any, PageNFTParams> = async (context) => {
  return serverResponse(context, async () => {
    const { address, tokenId } = context.params!
    const nft = await getNft({ address, tokenId })
    if (!nft) return { notFound: true }

    return {
      props: {
        nft,
      },
    }
  })
}

interface PageNFTParams extends ParsedUrlQuery {
  address: string
  tokenId: string
}

interface PageNFTProps {
  nft: []
}
