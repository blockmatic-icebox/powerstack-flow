import type { IronSession } from 'iron-session'
import { getIronSession } from 'iron-session'
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import { serverEnv } from '~/config/server'

export async function serverResponse(
  context: GetServerSidePropsContext,
  pageProps: (params: {
    session: IronSession
  }) => Promise<{ props?: any; notFound?: boolean; redirect?: any }>,
): Promise<GetServerSidePropsResult<unknown>> {
  const session = await getIronSession(context.req, context.res, serverEnv.sessionOptions)
  // request page props and logged user profile in parallel
  const [{ props, notFound, redirect }] = await Promise.all([pageProps({ session }), null])

  if (notFound) return { notFound }
  if (redirect) return { redirect }

  return {
    props: {
      user: session.user || null,
      ...props,
    },
  }
}
