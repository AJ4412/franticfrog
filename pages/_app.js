import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frantic Frog</title>
        <link rel="icon" href="/png/loading.png" />
        <meta name="description"
          content="Frantic Frog is a collection of 10,000 unique Frantic Frog NFTs featuring Frankie, The Frantic Frog amiably known in the community as F Cube. Glide and slippity slide into the NFT tide. Come along for the ride and join the F Cube frantic side." />
        <meta property="og:title" content="Frantic Frog" />
        <meta property="og:description" content="Frantic Frog is a collection of 10,000 unique Frantic Frog NFTs featuring Frankie, The Frantic Frog amiably known in the community as F Cube. Glide and slippity slide into the NFT tide. Come along for the ride and join the F Cube frantic side." />
        <meta property="og:image" content="/png/loading.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
