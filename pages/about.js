import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import Popup from "reactjs-popup";
import SEO from "../components/seo";
import ReactGA from "react-ga";
import Markdown from "react-markdown";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/about");

const AboutPage = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <main>
        <section className="container my-12">
          <div className="text-center">
            <h2 className="heading">Our Mission</h2>
          </div>
          <Markdown className="text-xl markdown-body mb-4 mx-auto text-center">
            We are a group of students working to connect hospitals in the
            DC-Maryland-Virginia region with desperately needed supplies in the
            wake of the COVID-19 pandemic. Our team is also working on
            independently producing hospital-approved Personal Protective
            Equipment (PPE) and other items, with the eventual vision of support
            healthcare workers during this time of crisis and shortage.
          </Markdown>
        </section>
        <section className="text-center mb-12">
          <p className="inline-block p-4 text-2xl bg-dark text-light">
            Founder and Coordinator: {data.founder}
          </p>
        </section>
        <section className="container mb-12 flex flex-wrap items-center">
          {data.teams.map((team) => {
            const teamSlug = new String(team.title)
              .toLowerCase()
              .replace(" ", "-");
            return (
              <Popup
                key={teamSlug}
                trigger={
                  <div className="trans opacity-75 hover:opacity-100 cursor-pointer w-full sm:w-1/4 px-4">
                    <img
                      src={require(`../assets/images/teams/${teamSlug}.png`)}
                      alt={team.title}
                      className="p-8"
                    />
                    <p className="text-light bg-dark text-center text-xl py-2 rounded-b-sm">
                      {team.title}
                    </p>
                  </div>
                }
                modal
              >
                {(close) => (
                  <div className="modal bg-dark text-light px-8 py-4">
                    <a
                      className="close cursor-pointer ml-2 text-light text-3xl"
                      onClick={close}
                    >
                      &times;
                    </a>
                    <div className="text-center">
                      <h2
                        className="heading text-light"
                        style={{ fontSize: "25px" }}
                      >
                        {team.title}
                      </h2>
                    </div>
                    <Markdown className="markdown-body mb-6">
                      {team.description}
                    </Markdown>
                    <div className="mb-6">
                      <p>
                        <span className="text-accent font-bold mr-1">
                          Leads:
                        </span>
                        <span className="text-light">
                          {team.leads.join(", ")}
                        </span>
                      </p>
                      <p>
                        <span className="text-accent font-bold mr-1">
                          Team:
                        </span>
                        <span className="text-light">
                          {team.team.join(", ")}
                        </span>
                      </p>
                    </div>
                    <div className="text-center mb-4">
                      <button
                        className="trans button-alt"
                        onClick={() => {
                          close();
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            );
          })}
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/about.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default AboutPage;
