import SEO from "../../../components/seo";
import React from "react";
import ReactGA from "react-ga";
import ear_saver from "../../../assets/images/ear_saver.png";

ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe-make/low-tech-ppe");
const PPEMakeLowTechPPEPage = ({ data }) => {
  return (
    <>
      <SEO title="Low Tech PPE" />
      <main className="container my-12">
        <section className="text-center mb-8">
          <h1 className="heading">Low Tech PPE</h1>
        </section>

        <section className="flex flex-row md:justify-center justify-end">
          <div className="md:w-2/3 w-full mb-5 md:mb-0 md:pr-3">
            <div
              className="border-2 border-gray-500"
            >
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/ij9wQRHGri0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="md:w-2/3 w-full md:pr-3">
            <div
              className="border-2 border-gray-500 h-full"
            >
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/watch?v=gJ4aQbABioA&feature=youtu.be"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PPEMakeLowTechPPEPage;
