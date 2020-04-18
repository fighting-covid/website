import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";

import "../assets/styles/main.css";
import "hamburgers/dist/hamburgers.min.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Baskervville&family=Barlow:wght@400;600&display=swap"
          rel="stylesheet"
          key="google-fonts"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
