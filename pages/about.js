import yaml from "js-yaml";
import fs from "fs";
import path from "path";

const AboutPage = ({ data }) => {
  return (
    <div>
      {data.teams.map((team) => (
        <div>
          <h2>{team.title}</h2>
          {team.members.map((member) => (
            <h4>{member}</h4>
          ))}
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/about.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default AboutPage;
