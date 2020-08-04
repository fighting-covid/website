import SEO from "../../../components/seo";
import React from "react";
import ReactGA from "react-ga";
import Iframe from 'react-iframe'
import Markdown from "react-markdown";
import path from "path"
import yaml from "js-yaml";
import fs from "fs";

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

            {data.stls.map((stl) => {
              const title = new String(stl.title);
              const link = new String(stl.link.slice(0, -1));
              const download = new String(stl.download.slice(0, -1));
              const printTime = new String(stl.printTime);
              const description = new String(stl.description);
              const credit = new String(stl.credit);
              const credit_link = new String(stl.credit_link.slice(0, -1));
              return (
                <section className="flex flex-col md:flex-row mb-10">
                  <div className="mb-100 flex flex-col px-4 md:px-0 h-64 md:w-1/2 w-full">
                    <Iframe url={link}
                      width="100%"
                      height="200%"
                      id="myId"
                      className="border-2 border-gray-500"
                      display="initial"
                      position="relative" />
                  </div>
                  <div className="flex flex-col w-full">
                    <section className="pl-2 md:pl-0 ml-3 md:ml-10 md:w-5/6 mr-3 md:mr-0">
                      <h3 className="heading text-2xl mt-2 sm:mt-0 mb-2">{title}</h3>
                      <p><i>Print time: {printTime}</i></p>
                      <p>Developed by <u><a target="_blank" style={{color: "blue"}}href={credit_link}>{credit}</a></u></p>
                      <p className="mt-5 mb-4">{description}</p>
                      <a href={download}>
                        <button class="mb-3 md:mb-3 bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                          Download STL
                        </button>
                      </a>
                    </section>
                  </div>
                </section>
              );
            })}
          </div>

        </section>
      </main>
    </>
  );
};
export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/3D.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default PPEMake3DPage;
