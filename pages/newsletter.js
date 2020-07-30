import SEO from "../components/seo";
import Link from "next/link";
import React from "react";
import ReactGA from "react-ga";
import ear from "../assets/images/ear_saver.png";
import virus from "../assets/images/virus.png";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/newsletter");

const Newsletter = ({ data }) => {
  return (
    <>
      <SEO title="Newsletter" />
      <main>
        <section className="md:mb-8 relative md:p-8">
          <div className="flex justify-center">
            <h1 className="text-center heading uppercase">The YCRO Dispatch</h1>
          </div>
        </section>

        <section className="flex md:mb-8 relative md:p-8 mx-64">
          <div className="w-1/3 mr-8">
            <img style={{ width: "100%" }} src={ear} alt="Zapppp" />
          </div>
          <div className="w-2/3">
            <h2 className="heading">Volume 1</h2>
            <p className="font-mono text-lg mb-4">
              This newsletter covers Virginia's plans to reopen, how to safely
              protest in the midst of a pandemic, and YCRO's innovative origmai
              ear-saver design."
            </p>
            <button className="trans button">
              <a href="/volume1.pdf" target="_blank">
                Read More
              </a>
            </button>
          </div>
        </section>
        <section className="flex md:mb-8 relative md:p-8 mx-64">
          <div className="w-1/3 mr-8">
            <img style={{ width: "100%" }} src={virus} alt="Zapppp" />
          </div>

          <div className="w-2/3">
            <h2 className="heading">Volume 2</h2>
            <p className="font-mono text-lg mb-4">
              In this issue, learn about the science behind a virus and
              SARS-CoV-2 in particular, delve into the behind the scenes of
              YCRO's Outreach efforts, and find out more about the impact
              private partnerships have made on slowing down testing and PPE
              scarcity across the nation.
            </p>
            <button className="trans button">
              <a href="/volume2.pdf" target="_blank">
                Read More
              </a>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Newsletter;
