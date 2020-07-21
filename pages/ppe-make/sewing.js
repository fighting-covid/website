import SEO from "../../components/seo";
import React from "react";
import ReactGA from "react-ga";
import materials_database from "../../assets/images/materials_database.svg";
import mask_instructions from "../../assets/images/mask_instructions.svg";

ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe-make/sewing");

const PPEMakeSewingPage = ({ data }) => {
	return (
		<>
			<SEO title="Make PPE" />
			<main className="md:mb-8 relative md:p-8">
				<div className="flex justify-left">
					<h2
						className="text-center md:text-3xl text-4xl pb-4 heading"
						style={{ "margin-left": "50px" }}
					>
						{"Sewing"}
					</h2>
				</div>
				<section className="flex flex-row">
					<div className="flex justify-center flex-grow">
						<img className="border-solid border-4 border-gray-600 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-105 ..." style={{ width: "45%" }} src={materials_database} alt="Materials Database" />
						<section className="flex flex-col md:justify-center">
							<div className="md:pr-1 p-5">
								<h2
									className="font-mono lg:text-2xl text-xll"
									style={{ color: "#304352" }}
								>
									Materials Database
                    			</h2>
							</div>
							<div className="md:p-5">
								<a href="https://3dprint.nih.gov/sites/default/files/models/3d_model_files/Prusa_Modified_TensionLocks_0.stl">
									<button class="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
										Download PDF
                     				 </button>
								</a>
							</div>
						</section>
					</div>
					<div className="flex justify-center flex-grow">						
						<section className="flex flex-col md:justify-center">
							<div className="md:p-5">
								<h2
									className="font-mono lg:text-2xl text-xll"
									style={{ color: "#304352" }}
								>
									Mask Sewing Instructions
                    			</h2>
							</div>
							<div className="md:p-5">
								<a href="https://www.hopkinsmedicine.org/coronavirus/_documents/INF2003076_VW_Hand-Sewn%20Mask%20instructions-1.pdf">
									<button class="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
										Download PDF
                     				 </button>
								</a>
							</div>
						</section>
						<img className="border-solid border-4 border-gray-600 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-105 ..." style={{ width: "45%" }} src={mask_instructions} alt="Mask Sewing Instructions" />
					</div>
				</section>
			</main>
		</>
	);
}

export default PPEMakeSewingPage;