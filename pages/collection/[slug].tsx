import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { serverResponse } from '~/lib/ssr'
import { getCollection } from '~/services/market'
import { Collection } from '~/views/collection'

export default function PageCollection({ collection }: PageCollectionProps) {
  return <Collection collection={collection} />
}

export const getServerSideProps: GetServerSideProps<any, PageCollectionParams> = async (
  context,
) => {
  return serverResponse(context, async ({ session }) => {
    const collection = await getCollection({ slug: context.params?.slug as string })
    if (!collection) return { notFound: true }

    return {
      props: {
        collection,
      },
    }
  })
}

interface PageCollectionParams extends ParsedUrlQuery {
  collection: string
}

interface PageCollectionProps {
  collection: []
}
