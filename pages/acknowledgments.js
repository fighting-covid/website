import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import SEO from "../components/seo";
import React from "react";
import donate from "../assets/images/donation.jpeg";
import ReactGA from "react-ga";

ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/acknowledgments");

const Acknowledgments = ({ data }) => {
  var textStyle = {
    position: 'absolute',
    top: '0%',
    left: '0%',
  };
  return (
    <>
      <SEO title="Acknowledgments" />
      <main>
        <section className="container my-12">
          <div className="text-center">
            <h1 className="heading">{data.title}</h1>
          </div>
          <Markdown className="text-xl markdown-body mb-4 mx-auto text-center">
            {data.subtitle}
          </Markdown>
        </section>
        <section className="mx-auto px-8 md:w-8/12">
          <div className="flex flex-wrap items-center justify-center -mx-6">
            {data.acknowledgments.map((ack, i) => (
              <div
                className={`trans cursor-pointer w-full sm:w-1/2 md:${ack.width || "w-1/3"} px-4 pb-8`}
                key={i}
              >
                <div className="group shadow duration-500 ease-in-out hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border border-dark-secondary rounded">
                  <div className="flex content-center items-center justify-center">
                    <a href={ack.link} target="_blank">
                      <img
                        src={require(`../assets/images/acknowledgments/${ack.image}`)}
                        alt={ack.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="items-center justify-center">
                        <span className="align-middle px-1 md:px-6 w-full h-full text-xs opacity-90 hidden text-light bg-dark group-hover:block">{ack.info}</span>
                      </div>
                    </a>
                  </div>
                  <p
                    className="text-light bg-dark text-center text-xl py-2"
                    style={{ minHeight: "50px" }}
                  >
                    {ack.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/acknowledgments.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default Acknowledgments;
