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
      <SEO title="Make PPE" />
      <main>
        <section className="container text-center my-5 md:my-12">
          <h1 className="heading">Sewing</h1>
        </section>
        <section className="container flex flex-wrap mb-2 md:mb-12 -mr-8">
          {data.sewing.map((resource, i) => (
            <div className="flex flex-wrap w-full md:w-1/2 pr-8 mb-8" key={i}>
              <div className="lg:pr-8 lg:w-1/2 mx-auto mb-4">
                <img
                  className="trans border-solid border-2 border-gray-600"
                  src={require(`../../../assets/images/make/${resource.thumbnail}`)}
                  alt={resource.title}
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-2xl text-dark mb-4">{resource.title}</h2>
                <div className="">
                  <a href={resource.link}>
                    <button className="trans button">Download PDF</button>
                  </a>
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
