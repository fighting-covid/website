import SEO from "../components/seo";
import ReactGA from "react-ga";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe-donate");

const PPEDonatePage = ({ data }) => (
  <>
    <SEO title="Donate PPE" />
    <main className="container mx-full">
      <section
        className="w-screen"
        style={{ overflowX: "hidden", height: "calc(100vh - 100px)" }}
      >
        <iframe
          className="h-full"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdsR-DkQwiTmll-QVtj4bvS4wR5asK6vX1a3DzlOGSduXX7Xg/viewform?usp=sf_link&embedded=true"
          width="99%"
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
