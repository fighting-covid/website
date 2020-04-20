import Head from "next/head";
import { useRef } from "react";

const PPEDonatePage = ({ data }) => (
  <>
    <Head>
      <title>Donate PPE | Project YCRO</title>
    </Head>

    <main className="container mx-auto">
      <section className="p-8" style={{ height: "calc(100vh - 100px)" }}>
        <iframe
          style={{ height: "100%" }}
          src="https://docs.google.com/forms/d/e/1FAIpQLSdsR-DkQwiTmll-QVtj4bvS4wR5asK6vX1a3DzlOGSduXX7Xg/viewform?usp=sf_link&embedded=true"
          width="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </section>
    </main>
  </>
);

export default PPEDonatePage;
