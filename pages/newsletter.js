import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import SEO from "../components/seo";
import Link from "next/link";
import React from "react";
import ReactGA from "react-ga";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/newsletter");

const Newsletter = ({ data }) => {
  return (
    <>
      <SEO title="Newsletter" />
      <main>
        <section className="container my-12">
          <div className="text-center ">
            <h1 className="heading">{data.title}</h1>
          </div>
        </section>
        <section className="container">
          {data.volumes.map((volume, i) => (
            <div className="flex flex-wrap mb-12" key={i}>
              <div className="w-full lg:w-5/12 pr-8 mb-4">
                <img
                  src={require(`../assets/images/newsletter/volume-${
                    i + 1
                  }.png`)}
                  alt={`Volume ${i + 1}`}
                />
              </div>
              <div className="w-full lg:w-7/12">
                <h2 className="heading">Issue {i + 1}</h2>
                <Markdown className="text-lg markdown-body mb-4">
                  {volume}
                </Markdown>
                <button className="trans button">
                  <a href={`/newsletter/volume-${i + 1}.pdf`} target="_blank">
                    Read More
                  </a>
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/newsletter.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default Newsletter;
