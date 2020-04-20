import SEO from "../components/seo";

const PPERequestPage = ({ data }) => (
  <>
    <SEO title="Request PPE" />
    <main className="container mx-auto">
      <section className="p-8" style={{ height: "calc(100vh - 100px)" }}>
        <iframe
          style={{ height: "100%" }}
          src="https://docs.google.com/forms/d/e/1FAIpQLSfDdXO8zSeozASqR8GUQDwsmXvUPbx1BGUveNh1Yu8fm7omuQ/viewform?usp=sf_link&embedded=true"
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

export default PPERequestPage;
