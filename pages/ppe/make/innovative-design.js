import SEO from "../../../components/seo";
import React from "react";
import ReactGA from "react-ga";
import ear_saver from "../../../assets/images/ear_saver.png";

ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe-make/3d");
const PPEMake3DPage = ({ data }) => {
  return (
    <>
      <SEO title="Innovative Design" />
      <main>
        <section className="container my-12">
          <div className="text-center mb-8">
            <h1 className="heading">Innovative Design</h1>
          </div>
          <section className="flex flex-wrap-reverse md:justify-center justify-end">
            <div className="md:pr-3">
              <div
                className="border-2 border-gray-500 md:w-1/2 w-full"
                style={{ width: "80vh", height: "50vh" }}
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
            <div className="md:pr-3">
              <div
                className="border-2 border-gray-500 md:w-1/2 w-full"
                style={{ width: "80vh", height: "50vh" }}
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

export default PPEMake3DPage;
