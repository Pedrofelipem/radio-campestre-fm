import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" />
          <link rel="icon" href="favicon.png" type="image.png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}