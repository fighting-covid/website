import { useRouter } from "next/router";
const yaml = require("js-yaml");
const fs = require("fs");
import path from "path";

const AboutPage = ({ data }) => {
  return (
    <div>
      {Object.keys(data).map((group) => (
        <div>
          <h2>{group}</h2>
          {data[group].map((person) => (
            <h4>{person}</h4>
          ))}
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/about.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  console.log(data);
  return { props: { data } };
}

export default AboutPage;
