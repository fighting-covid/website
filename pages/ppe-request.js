import SEO from "../components/seo";
import ReactGA from "react-ga";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe-request");

const PPERequestPage = ({ data }) => (
  <>
    <SEO title="Request PPE" />
    <main className="w-full">
      <section
        className="w-screen p-4"
        style={{ overflowX: "hidden", height: "calc(100vh - 100px)" }}
      >
        <iframe
          className="h-full"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfDdXO8zSeozASqR8GUQDwsmXvUPbx1BGUveNh1Yu8fm7omuQ/viewform?usp=sf_link&embedded=true"
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

export default PPERequestPage;
