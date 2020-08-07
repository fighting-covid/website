import SEO from "../../../components/seo";
import React from "react";
import ReactGA from "react-ga";
import Markdown from "react-markdown";
import path from "path"
import yaml from "js-yaml";
import fs from "fs";

ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe-make/low-tech-ppe");
const PPEMakeLowTechPPEPage = ({ data }) => {
  return (
    <>
      <SEO title="Low Tech PPE" />
      <main className="container my-12">
        <section className="text-center mb-8">
          <h1 className="heading">Low-Tech PPE</h1>
        </section>        

        <section className="container">
          {data.images.map((image, i) => (
            <div className="flex flex-wrap mb-12" key={i}>
              <div className="w-full lg:w-5/12 pr-8 mb-4">
                <img
                  src={require(`../../../assets/images/make/innovative-design/${image.link}`)}
                  alt={image.title}
                  style={{height: "300px"}}
                />
              </div>
              <div className="w-full lg:w-7/12">
                <h2 className="text-3xl" style={{color: "#304352"}}>{image.title}</h2>
                <Markdown className="text-lg markdown-body mb-4">
                  {image.content}
                </Markdown>
              </div>
            </div>
          ))}
        </section>

        <section className="flex flex-row md:justify-center justify-end mb-16">
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
                src="https://www.youtube.com/embed/gJ4aQbABioA"
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

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/lowtech.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default PPEMakeLowTechPPEPage;
