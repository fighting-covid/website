import Header from "../components/header";
import Footer from "../components/footer";

import "../assets/styles/main.css";
import "hamburgers/dist/hamburgers.min.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
