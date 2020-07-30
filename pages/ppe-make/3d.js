import SEO from "../../components/seo";
import React from "react";
import ReactGA from "react-ga";
import Iframe from "react-iframe";

ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe-make/3d");
const PPEMake3DPage = ({ data }) => {
  return (
    <>
      <SEO title="Make PPE" />
      <main>
        <section className="md:mb-8 relative md:p-8">
          <div className="flex justify-left">
            <h2
              className="text-center md:text-3xl text-4xl pb-4 heading"
              style={{ marginLeft: "50px" }}
            >
              3D Printing
            </h2>
          </div>

          <section className="flex flex-wrap-reverse md:justify-center justify-end">
            <div className="md:pr-3">
              <div
                className="border-2 border-gray-500 md:w-1/2 w-full"
                style={{ width: "80vh", height: "50vh" }}
              >
                <div className="modelo-wrapper">
                  {" "}
                  <div
                    style={{
                      marginBottom: "0%",
                      width: "100%",
                      height: "100%",
                      paddingBottom: "56.25%",
                      position: "relative",
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                      }}
                    >
                      {" "}
                      <Iframe
                        url="https://platform.sayduck.com/public/preview/e40aec90-aea9-0138-6da4-3ea8e8560ebf"
                        width="100%"
                        height="111%"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <br></br>
                <br></br>

                <section className="flex flex-wrap-reverse md:justify-center">
                  <div className="md:pr-1 p-5">
                    <h2
                      className="font-mono lg:text-2xl text-xll"
                      style={{ color: "#304352" }}
                    >
                      Face Shield
                    </h2>
                  </div>
                  <div className="md:p-5">
                    <a href="https://3dprint.nih.gov/sites/default/files/models/3d_model_files/Prusa_Modified_TensionLocks_0.stl">
                      <button className="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                        Download STL
                      </button>
                    </a>
                  </div>
                </section>
              </div>
            </div>
            <div
              className="border-2 border-gray-500 md:w-1/2 w-full"
              style={{ width: "80vh", height: "50vh" }}
            >
              <div className="modelo-wrapper">
                {" "}
                <div
                  style={{
                    marginBottom: "0%",
                    width: "100%",
                    height: "100%",
                    paddingBottom: "56.25%",
                    position: "relative",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    {" "}
                    <Iframe
                      url="https://platform.sayduck.com/public/preview/da690e50-aeaa-0138-19eb-3ea8e8560ebf"
                      width="100%"
                      height="111%"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <br></br>

              <section className="flex flex-wrap-reverse md:justify-center p-6">
                <div className="md:pr-1 p-5">
                  <h2
                    className="font-mono lg:text-2xl text-xll"
                    style={{ color: "#304352" }}
                  >
                    Face Mask Buckle
                  </h2>
                </div>
                <div className="md:p-5">
                  <a href="https://3dprint.nih.gov/sites/default/files/models/3d_model_files/Surgical%20Mask%20Band%20for%20Ear%20Comfort%20-%20Extra%20Security_2.STL">
                    <button className="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                      Download STL
                    </button>
                  </a>
                </div>
              </section>
            </div>
          </section>

          <br></br>
          <br></br>
        </section>
      </main>
    </>
  );
};

export default PPEMake3DPage;
