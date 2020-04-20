import Head from "next/head";

const SEO = ({ title }) => (
  <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Baskervville&family=Barlow:wght@400;600&display=swap"
      rel="stylesheet"
      key="google-fonts"
    />
    <link rel="icon" href="/favicon.svg" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta
      name="description"
      content="Youth COVID-19 Relief Organization: an effort led by high-school students to aid hospitals in the NoVA/DC/MD area."
    />
    <title>{title + " | " || ""} Project YCRO</title>
  </Head>
);

export default SEO;
