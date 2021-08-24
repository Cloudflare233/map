import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <>
	  <Head>
	   <link
  href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
  rel="stylesheet"
/>
	  </Head>
        <Component {...pageProps} />
		 </>
		)
}

export default MyApp