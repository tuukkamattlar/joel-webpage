import '@styles/globals.css'
import Head from 'next/head'
function Application({ Component, pageProps }) {
  return (<>
          <Head>
            <title>Joel Ward</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
          </>)
}

export default Application
