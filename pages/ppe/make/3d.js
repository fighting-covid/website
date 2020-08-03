import SEO from "../../../components/seo";
import React from "react";
import ReactGA from "react-ga";
import Iframe from 'react-iframe'
import Markdown from "react-markdown";

/*
                <div className="modelo-wrapper">
                  <Iframe url="https://platform.sayduck.com/public/preview/e40aec90-aea9-0138-6da4-3ea8e8560ebf"
                    width="100%"
                    height="111%"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />{" "}
                </div>
*/

ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe/make/3d");
const PPEMake3DPage = ({ data }) => {
  return (
    <>
      <SEO title="3D Printing" />
      <main>
        <section className="md:mb-8 relative md:p-8">
          <section className="container text-center my-5 md:my-12">
            <h1 className="heading">3D Printing</h1>
          </section>
          <div className="flex flex-wrap flex-col md:flex-row">
            <div className="flex flex-col px-4 md:px-0 h-64 md:w-1/2 w-full">
              <Iframe url="https://platform.sayduck.com/public/preview/e40aec90-aea9-0138-6da4-3ea8e8560ebf"
                width="100%"
                height="200%"
                id="myId"
                className="border-2 border-gray-500"
                display="initial"
                position="relative" />
            </div>
            <div className="flex flex-col">
              <section className="pl-2 md:pl-0 ml-3 md:ml-10">
                <h3 className="heading text-2xl mt-2 sm:mt-0 mb-2">Face Shield</h3>
                <p><i>Print time: 35 minutes</i></p>
                <p className="mt-5 mb-4">This is the one sentence about this print. It is very strong and sturdy.</p>
                <a href="https://3dprint.nih.gov/sites/default/files/models/3d_model_files/Prusa_Modified_TensionLocks_0.stl">
                  <button class="mb-3 md:mb-3 bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                    Download STL
                  </button>
                </a>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PPEMake3DPage;
