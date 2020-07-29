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
				<div className="justify-left text-center md:text-left w-100">
					<h2
						className="md:text-4xl mt-4 md:mt-0 text-3xl pb-4 heading"
					>
						{"Sewing"}
					</h2>
				</div>
				<section className="flex flex-col md:flex-row">
					<div className="md:flex justify-center">
						<img className="ml-12 md:ml-0 w-3/4 md:w-1/2 border-solid border-4 border-gray-600 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-105 ..." src={materials_database} alt="Materials Database" />
						<section className="md:ml-0 flex flex-col justify-center">
							<div className="md:pr-1 pt-5">
								<h2
									className="font-mono lg:text-2xl text-center text-xl"
									style={{ color: "#304352" }}
								>
									Materials Database
                    			</h2>
							</div>
							<div className="text-center p-5">
								<a href="https://3dprint.nih.gov/sites/default/files/models/3d_model_files/Prusa_Modified_TensionLocks_0.stl">
									<button class="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
										Download PDF
                     				 </button>
								</a>
							</div>
						</section>
					</div>
					<div className="md:flex justify-center">
						<img className="ml-12 md:ml-0 w-3/4 md:w-1/2 border-solid border-4 border-gray-600 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-105 ..." src={mask_instructions} alt="Mask Sewing Instructions" />
						<section className="flex flex-col justify-center">
							<div className="md:pr-1 pt-5">
								<h2
									className="font-mono lg:text-2xl text-center text-xl"
									style={{ color: "#304352" }}
								>
									Mask Sewing Instructions
                    			</h2>
							</div>
							<div className="p-5 text-center">
								<a href="https://www.hopkinsmedicine.org/coronavirus/_documents/INF2003076_VW_Hand-Sewn%20Mask%20instructions-1.pdf">
									<button class="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
										Download PDF
                     				 </button>
								</a>
							</div>
						</section>
					</div>
				</section>
			</main>
		</>
	);
}

export default PPEMakeSewingPage;