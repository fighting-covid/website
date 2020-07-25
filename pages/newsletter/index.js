import SEO from "../../components/seo";
import Link from "next/link";
import React from "react";
import ReactGA from "react-ga";
import ear from "../../assets/images/ear_saver.png";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/newsletter");

const Newsletter = ({ data }) => {
	return (
		<>
			<SEO title="Newsletter" />
			<main>
				<section className="md:mb-8 relative md:p-8">
					<div className="flex justify-center">
						<h2
							className="text-center md:text-3xl text-4xl pb-4 heading"
							style={{ "margin-left": "50px" }}
						>
							{"THE YCRO DISPATCH"}
						</h2>
					</div>
				</section>

				<section className="flex md:mb-8 relative md:p-8 mx-64">
					<div className="w-1/3 mr-4">
						<img style={{ width: "100%" }} src={ear} alt="Zapppp" />
					</div>

					<div className="w-2/3">
						<div className="px-4 pb-4">
							<p className="font-mono text-4xl" style={{ color: "#304352" }}>Some Title for the Article Goes Here</p>
						</div>
						<div className="px-4 pb-4">
							<p className="font-mono text-lg"> Some short summary goes here. Some short summary goes here. Some short summary goes here.
							Some short summary goes here. Some short summary goes here. Some short summary goes here. Some short summary goes here.
							Some short summary goes here. Some short summary goes here. Some short summary goes here. Some short summary goes here.
							Some short summary goes here. Some short summary goes here. Some short summary goes here.
							</p>
						</div>
						<div className="px-4 pb-4">
							<button class="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
								<Link href="/newsletter/vol1">Read More</Link>
							</button>
						</div>
					</div>
				</section>
				{/* <hr style={{
					color: '#000000',
					backgroundColor: '#000000',
					height: .1,
					borderColor: '#000000'
				}} /> */}
				<section className="flex md:mb-8 relative md:p-8 mx-64">
					<div className="w-1/3 mr-4">
						<img style={{ width: "100%" }} src={ear} alt="Zapppp" />
					</div>

					<div className="w-2/3" style={{ background: "#304352" }}>
						<div className="px-4 pb-4">
							<p className="font-mono text-4xl" style={{ color: "white" }}>Some Title for the Article Goes Here</p>
						</div>
						<div className="px-4 pb-4">
							<p className="font-mono text-lg"> Some short summary goes here. Some short summary goes here. Some short summary goes here.
							Some short summary goes here. Some short summary goes here. Some short summary goes here. Some short summary goes here.
							Some short summary goes here. Some short summary goes here. Some short summary goes here. Some short summary goes here.
							Some short summary goes here. Some short summary goes here. Some short summary goes here.
							</p>
						</div>
						<div className="px-4 pb-4">
							<button class="bg-white hover:bg-blue-700 text-dark py-2 px-4 rounded-full">
								<Link href="/newsletter/vol1">Read More</Link>
							</button>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Newsletter;