import Markdown from "react-markdown";
import SEO from "../../components/seo";
import React from "react";
import ReactGA from "react-ga";
import Link from "next/link";
import ppebackground from "../../assets/images/sewingPPE.png";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe-make");

const PPEMakePage = ({ data }) => {
  return (
    <>
      <SEO title="Make PPE" />
      <main>
        <section className="md:mb-0 relative p-8 md:p-64">
          <img
            className="w-full h-full bg-local object-cover bg-no-repeat bg-center absolute inset-0"
            src={ppebackground}
            style={{
              objectPosition: "0% 25%",
              filter: "blur(2px)",
              height: "100%",
            }}
          ></img>
          <div className="p-4 flex flex-col items-left relative">
            <div>
              <p
                className="text-left font-mono md:text-5xl text-4xl pb-4"
                style={{ color: "white" }}
              >
                Make PPE
              </p>
            </div>
            <div className="text-left font-mono lg:text-2xl text-x1">
              <p style={{ color: "white" }}>
                Help medical professionals fight COVID-19 by making PPE at home.
              </p>
            </div>

            <br></br>

            <div>
              <button
                className="bg-dark hover:bg-blue-700 text-white py-2 w-56 rounded-full"
                style={{ "margin-right": "14px" }}
              >
                <Link href="/ppe-make/3d">Sewing</Link>
              </button>
              <button
                className="bg-dark hover:bg-blue-700 text-white py-2 w-56 rounded-full"
                style={{ "margin-right": "14px" }}
              >
                <Link href="/ppe-make/3d">3D-Printing</Link>
              </button>
              <button className="bg-dark hover:bg-blue-700 text-white py-2 w-56 rounded-full">
                <Link href="/ppe-make/3d">2D-Printing</Link>
              </button>
            </div>
          </div>
        </section>
        {/* <section className="p-8">
          <div className="flex justify-center">
            <h2 className="text-center font-bold font-serif md:text-5xl text-4xl pb-4 heading">
              {"Make PPE at Home"}
            </h2>
          </div>
          <Markdown className="text-xl markdown-body mb-4 mx-auto text-center">
            {"Help medical professionals fight COVID-19 by 3D-printing PPE at home."}
          </Markdown>
          <br></br>
          <div style={{color: 'blue'}} dangerouslySetInnerHTML={{__html: '<a href="https://drive.google.com/uc?export=download&id=1ngG0iM11Gf9VhcNeaZRmF8A2KxxJ-aoe" download><u><b>Download the Materials and Sterilization Database for Homemade Masks</b></u></a>'}} />
          <br></br>
          <h3 className="font-serif text-3xl font-bold mb-2">
            {"Face Shield"}
          </h3>
          <a href="https://3dprint.nih.gov/sites/default/files/models/3d_model_files/Prusa_Modified_TensionLocks_0.stl" style={{ color: 'blue' }}><b><u>Download this file</u></b></a>
          <br></br>
          <div className="modelo-wrapper"> <div style={{ marginBottom: '0%', width: '100%', height: '100%', paddingBottom: '56.25%', position: 'relative' }}> <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}> <iframe src="https://app.modelo.io/embedded/7cMeZX4vg9?viewport=true&autoplay=true" style={{ width: '100%', height: '100%' }} frameBorder={0} /> </div> </div> </div>
          <h3 className="font-serif text-3xl font-bold mb-2" style={{ marginTop: '0%' }}>
            {"Face Mask Buckle"}
          </h3>
          <a href="https://3dprint.nih.gov/sites/default/files/models/3d_model_files/Surgical%20Mask%20Band%20for%20Ear%20Comfort%20-%20Extra%20Security_2.STL" style={{ color: 'blue' }}><b><u>Download this file</u></b></a>
          <br></br>
          <div className="modelo-wrapper"> <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}> <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}> <iframe src="https://app.modelo.io/embedded/R7_6wlbu7K?viewport=true&autoplay=true" style={{ width: '100%', height: '100%' }} frameBorder={0} /> </div> </div> </div>
          <br></br>
        </section> */}
      </main>
    </>
  );
};

export default PPEMakePage;
