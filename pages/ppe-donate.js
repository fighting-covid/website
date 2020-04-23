import SEO from "../components/seo";

const PPEDonatePage = ({ data }) => (
	<>
		<SEO title="Donate PPE" />
		<main className="container mx-full">
			<section style={{ width: "100vw", height: "calc(100vh - 100px)" }}>
				<iframe
					style={{ height: "100%", width: "100vw" }}
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
