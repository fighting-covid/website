import SEO from "../components/seo";

const PPEDonatePage = ({ data }) => (
	<>
		<SEO title="Donate PPE" />
		<main className="container mx-full">
			<section className="w-screen" style={{ height: "calc(100vh - 100px)" }}>
				<iframe
					className="h-full"
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
