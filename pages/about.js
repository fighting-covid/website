import yaml from "js-yaml";
import fs from "fs";
import path from "path";

import Markdown from "react-markdown";
import SEO from "../components/seo";

const AboutPage = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <main className="container mx-auto">
        <section className="p-8">
          <h2 className="font-serif font-bold md:text-5xl text-4xl heading">
            The Mission
          </h2>
          <Markdown className="text-xl markdown-body">{data.mission}</Markdown>
        </section>
        <section className="p-8">
          <h2 className="font-serif font-bold md:text-5xl text-4xl heading">
            The Members
          </h2>
          {data.teams.map((team) => (
            <div
              key={team.title.replace(" ", "-").toLowerCase()}
              className="mb-8"
            >
              <h3 className="font-serif text-3xl font-bold mb-2">
                {team.title}
              </h3>
              <h4 className="text-lg mb-4">
                {team.description ? (
                  <Markdown className="markdown-body">
                    {team.description}
                  </Markdown>
                ) : null}
              </h4>
              <div className="flex flex-wrap">
                {team.members.map((member) => (
                  <div
                    className="lg:w-1/6 md:w-1/4 sm:w-1/3 w-1/2"
                    key={
                      member.hasOwnProperty("link")
                        ? member.name.replace(" ", "-").toLowerCase()
                        : member.replace(" ", "-").toLowerCase()
                    }
                  >
                    {member.hasOwnProperty("link") ? (
                      <a
                        href={member.link}
                        target="_blank"
                        className="border-b-2 border-gray-500 inline-block mb-3"
                      >
                        {member.name}
                      </a>
                    ) : (
                      <p className="border-b-2 border-gray-500 inline-block mb-3">
                        {member}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
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
