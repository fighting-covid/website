import SEO from "../../components/seo";
import Link from "next/link";
import React from "react";
import ReactGA from "react-ga";
import ear from "../../assets/images/ear_saver.png";
import virus from "../../assets/images/virus.png";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/newsletter");

const Newsletter = ({ data }) => {
  return (
    <>
      <SEO title="Newsletter" />
      <main>
        <section className="md:mb-8 relative md:p-8">
          <div className="flex justify-center">
            <h2
              className="text-center md:text-3xl text-4xl pb-4 heading"
              style={{ marginLeft: "50px" }}
            >
              THE YCRO DISPATCH
            </h2>
          </div>
        </section>

        <section className="flex md:mb-8 relative md:p-8 mx-64">
          <div className="w-1/3 mr-4">
            <img style={{ width: "100%" }} src={ear} alt="Zapppp" />
          </div>

          <div className="w-2/3">
            <div className="px-4 pb-4">
              <p className="font-mono text-4xl" style={{ color: "#304352" }}>
                Volume 1
              </p>
            </div>
            <div className="px-4 pb-4">
              <p className="font-mono text-lg">
                {" "}
                This newsletter covers Virginia's plans to reopen, how to safely
                protest in the midst of a pandemic, and YCRO's innovative
                origmai ear-saver design."
              </p>
            </div>
            <div className="px-4 pb-4">
              <button className="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                <a href="/volume1.pdf" target="_blank">
                  Read More
                </a>
              </button>
            </div>
          </div>
        </section>
        {/* <hr style={{
					color: '#000000',
					backgroundColor: '#000000',
					height: .1,
					borderColor: '#000000'
				}} /> */}
        <section className="flex md:mb-8 relative md:p-8 mx-64">
          <div className="w-1/3 mr-4">
            <img style={{ width: "100%" }} src={virus} alt="Zapppp" />
          </div>

          <div className="w-2/3" style={{ background: "white" }}>
            <div className="px-4 pb-4">
              <p className="font-mono text-4xl" style={{ color: "#304352" }}>
                Volume 2
              </p>
            </div>
            <div className="px-4 pb-4">
              <p className="font-mono text-lg">
                In this issue, learn about the science behind a virus and
                SARS-CoV-2 in particular, delve into the behind the scenes of
                YCRO's Outreach efforts, and find out more about the impact
                private partnerships have made on slowing down testing and PPE
                scarcity across the nation.
              </p>
            </div>
            <div className="px-4 pb-4">
              <button className="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                <a href="/volume2.pdf" target="_blank">
                  Read More
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Newsletter;
