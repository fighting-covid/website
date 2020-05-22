import yaml from "js-yaml";
import fs from "fs";
import path from "path";

import Markdown from "react-markdown";
import SEO from "../components/seo";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-167321699-1');
ReactGA.pageview('/about');

const Team = ({ team }) => {
  const key = team.title.replace(" ", "-".toLowerCase());

  return (
    <div className="mb-8" key={key}>
      <h3 className="font-serif text-3xl font-bold mb-2">{team.title}</h3>
      <h4 className="text-lg mb-4">
        {team.description && (
          <Markdown className="markdown-body">{team.description}</Markdown>
        )}
      </h4>
      <div className="flex flex-wrap">
        {team.members.map((member) => (
          <Member member={member} />
        ))}
      </div>
    </div>
  );
};

const Member = ({ member }) => {
  const linkStyle = "text-lg border-b-2 border-gray-500 block";
  const hasLink = member.hasOwnProperty("link");
  const key = (hasLink ? member.name : member).replace(" ", "-").toLowerCase();

  return (
    <div
      className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full flex items-center mb-4"
      key={key}
    >
      {hasLink ? (
        <a
          href={member.link}
          target="_blank"
          rel="noopener"
          className={linkStyle}
        >
          {member.name}
        </a>
      ) : (
        <p className={linkStyle}>{member}</p>
      )}
    </div>
  );
};

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
            <Team team={team} />
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
