import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalContextProvider } from '~/context/global.context'
import { RootLayout } from '~/layouts/root'
import '~/public/assets/css/icons.min.css'
import '~/styles/globals.css'

import '../config/flow/config'

export default function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <GlobalContextProvider>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </GlobalContextProvider>
      </SessionProvider>
    </>
  )
}
