import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { serverResponse } from '~/lib/ssr'
import { getMaketplaceData } from '~/services/market'
import { Marketplace } from '~/views/marketplace'

export default function PageMarketplace({ marketplace }: PageMarketplaceProps) {
  return <Marketplace marketplace={marketplace} />
}

export const getServerSideProps: GetServerSideProps<any, PageMarketplaceParams> = async (
  context,
) => {
  return serverResponse(context, async ({ session }) => {
    const marketplace = await getMaketplaceData()
    if (!marketplace) return { notFound: true }

    return {
      props: {
        marketplace,
      },
    }
  })
}

interface PageMarketplaceParams extends ParsedUrlQuery {}

interface PageMarketplaceProps {
  marketplace: []
}
