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
      <main>
        <section className="container my-12">
          <div className="text-center mb-8">
            <h1 className="heading">Low Tech PPE</h1>
          </div>
          <section className="flex flex-col md:flex-row md:justify-center justify-end">
            <div className="md:w-2/3 w-full mb-5 md:mb-0 md:pr-3">
              <div
                className="border-2 border-gray-500"
              >
                <a
                  href="https://www.youtube.com/watch?v=ij9wQRHGri0"
                  target="_blank"
                >
                  {" "}
                  <img
                    className="border-solid border-2 border-gray-500 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-105 ..."
                    style={{ width: "100%", height: "100%" }}
                    src={ear_saver}
                    alt="Ear Saver Banner"
                  />
                </a>
              </div>
            </div>
            <div className="md:w-2/3 w-full md:pr-3">
              <div
                className="border-2 border-gray-500 h-full"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ij9wQRHGri0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default PPEMakeLowTechPPEPage;