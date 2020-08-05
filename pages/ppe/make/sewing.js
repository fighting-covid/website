import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import SEO from "../../../components/seo";
import React from "react";
import ReactGA from "react-ga";


ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe-make/sewing");

const PPEMakeSewingPage = ({ data }) => {
  return (
    <>
      <SEO title="Sewing" />
      <main>
        <section className="container text-center pt-12">
          <h1 className="heading">Sewing</h1>
        </section>
          
        <section className="container flex flex-wrap md:justify-center">
        <section className="flex flex-wrap pl-6 pr-6 text-center pb-8">
            <p className="w-full">{data.content}</p>
          </section>
          {data.sewing.map((resource, i) => (
            <div className="flex flex-wrap md:w-1/2  mb-8 pl-6 pr-6" key={i}>
              
            <div className="lg:pr-6 mb-4">
              <div className="text-center">
                <h2 className="text-2xl text-dark mb-4 text-center">{resource.title}</h2>
                <p className="pb-6">{resource.content}</p>
              </div>
                <img
                  className="trans border-solid border-2 border-gray-600"
                  src={require(`../../../assets/images/make/${resource.thumbnail}`)}
                  alt={resource.title}
                />
            <div className="lg:w-full text-center pt-4">
            <div className="">
              <button className="trans button">
                <a href={resource.link} target="_blank">
                  Download PDF
                </a>
              </button>
            </div>
            </div>
              </div>
              
          </div>
          ))}
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/make.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default PPEMakeSewingPage;
