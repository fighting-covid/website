import SEO from "../../components/seo";
import Link from "next/link";
import React from "react";
import ReactGA from "react-ga";
import ear from "../../assets/images/ear_saver.png";
import v1p1 from "../../assets/images/volume2_page1.jpg";
import v1p2 from "../../assets/images/volume2_page2.jpg";
import v1p3 from "../../assets/images/volume2_page3.jpg";
import v1p4 from "../../assets/images/volume2_page4.jpg";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/newsletter/vol2");

const Vol2 = ({ data }) => {
	return (
		<>
			<SEO title="Newsletter" />
			<main>
				<section className="mb-8 relative md:p-8">
					<div className="justify-center items-center flex flex-col">
						<img className="w-3/4" src={v1p1} />
						<br></br><br></br>
						<img className="w-3/4" src={v1p2} />
						<br></br><br></br>
						<img className="w-3/4" src={v1p3} />
						<br></br><br></br>
						<img className="w-3/4" src={v1p4} />
					</div>
				</section>
			</main>
		</>
	);
};

export default Vol2;