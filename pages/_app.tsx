import { SessionProvider, useSession } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import { GlobalContextProvider } from '~/context/global.context'
import { RootLayout } from '~/layouts/root'
import '~/public/assets/css/icons.min.css'
import '~/styles/globals.css'

import { clientEnv } from '../../flow-marketplace/config/client'
import '../config/flow/config'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <SessionSync />
        <GlobalContextProvider>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </GlobalContextProvider>
      </SessionProvider>
    </>
  )
}

function SessionSync() {
  const session = useSession()
  // keep jwt in sync with next session
  useEffect(() => {
    console.log({ session })
    if (session?.data?.user?.jwt)
      localStorage.setItem(clientEnv.jwtLocalStorageKey, session.data?.user?.jwt || '')
  }, [session])

  return <></>
}
