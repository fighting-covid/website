import SEO from "../../components/seo";
import Link from "next/link";
import React from "react";
import ReactGA from "react-ga";
import ear from "../../assets/images/ear_saver.png";
import v1p1 from "../../assets/images/volume1_page1.jpg";
import v1p2 from "../../assets/images/volume1_page2.jpg";
import v1p3 from "../../assets/images/volume1_page3.jpg";
import v1p4 from "../../assets/images/volume1_page4.jpg";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/newsletter/vol1");

const Vol1 = ({ data }) => {
	return (
		<>
			<SEO title="Newsletter" />
			<main>
				<section className="md:mb-8 relative md:p-8 mx-64">
					<div className="justify-center">
						<img style={{ width: "100%" }} src={v1p1} />
						<img style={{ width: "100%" }} src={v1p2} />
						<img style={{ width: "100%" }} src={v1p3} />
						<img style={{ width: "100%" }} src={v1p4} />
					</div>
				</section>
			</main>
		</>
	);
};

export default Vol1;