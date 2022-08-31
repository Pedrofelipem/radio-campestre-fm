import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../services/prismic'

import { Footer } from '../components/Footer/footer'
import { Header } from '../components/Header/header'

import './../styles/global.scss'




function MyApp({ Component, pageProps}) {
  return (
      <>
      <Head>
        <title>Campestre FM</title>
      </Head>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>
              {children}
            </a>
          </Link>
        )}
      >
          <PrismicPreview repositoryName={repositoryName}>
            <Header />
            <Component {...pageProps} />
          </PrismicPreview>
         
        </PrismicProvider>
    </>
   
  )
}

export default MyApp

