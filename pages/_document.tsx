import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className="dark scroll-smooth">
        <Head>
          <meta name="description" content="Flow Hackathon AI Project" />
        </Head>
        <body className="flex justify-center w-full h-screen text-base text-black align-middle">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
