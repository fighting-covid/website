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
      <SEO title="Low-Tech PPE" />
      <main className="container my-12">
        <section className="text-center mb-12">
          <h1 className="heading">Low-Tech PPE</h1>
          <p>YCRO’s Innovative Design Team is hard at work enabling anyone and everyone to produce their own PPE without the use of 3D printers or sewing. Our designs are thoroughly tested and suitable for your use! They are designed to supplement your existing PPE and enhance your wearing experience. If your center has a need for these types of PPE, you are welcome to request items from us via YCRO’s donation request form. If you would like one for your own casual use, you may manufacture your own using the instructions below.</p>
        </section>
        <section>
          {data.images.map((image, i) => (
            <div className="flex flex-wrap mb-12" key={i}>
              <div className="w-full lg:w-5/12 md:pr-8 mb-4 items-center justify-center">
                <img
                  src={require(`../../../assets/images/make/innovative-design/${image.link}`)}
                  alt={image.title}
                  style={{height:`${image.height}` }}
                />
              </div>
              <div className="w-full lg:w-7/12">
                <h3 className="heading text-3xl">{image.title}</h3>
                <Markdown className="text-lg mt-2 markdown-body mb-4">
                  {image.content}
                </Markdown>
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col md:-mx-16 lg:flex-row md:justify-center justify-end mb-16">
          <div className="w-full mb-5 md:mb-0 md:pr-3">
            <div
              className="border-2 sm:mb-12 lg:mb-0 border-gray-500"
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
          <div className="w-full md:pr-3">
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
