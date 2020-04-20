import Header from "../components/header";
import Footer from "../components/footer";

import "../assets/styles/main.css";
import "hamburgers/dist/hamburgers.min.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col">
          <Header className="flex-shrink-0" />
          <Component {...pageProps} />
        </div>
        <div className="pin-b">
          <Footer />
        </div>
      </div>
    </>
  );
}
