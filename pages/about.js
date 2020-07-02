import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import osms from '../assets/images/osms.jpg';
import fcpl from '../assets/images/fcpl2.jpg';
import covid from '../assets/images/3d.jpg';
import mfd from '../assets/images/mfd.jpg'
import mn from '../assets/images/mn.jpg'
import donate from '../assets/images/donation.jpeg';
import breathe from '../assets/images/breathe.jpg';

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

const Card = (image) => {
  const [text, setText] = useState("");

  // const setStyle = (background, font) => {
  //   setBackground(background);
  //   setFont(font);
  // };

  return (
    <div>
      <img
        className="object-fill w-full bg-local bg-no-repeat bg-center absolute inset-0"
        src={image}>
      </img>
    </div>
  );
};

const AboutPage = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <main>
        <section className="md:mb-16 relative p-8 md:p-64">
          <img
            className="w-full h-full bg-local object-cover bg-no-repeat bg-center absolute inset-0"
            src="https://www.froedtert.com/sites/default/files/styles/one_column/public/image/2020-03/GettyImages-869125416_0.jpg?itok=wTTNF6vl"
            style={{ objectPosition: "50% 75%" }}>
          </img>
          <div className="p-4 flex flex-col items-left relative">
            <div>
              <p className="text-left font-mono md:text-5xl text-4xl pb-4" style={{ color: "#304352" }}>
                Our Mission
              </p>
            </div>
            <div className="text-left font-mono lg:text-2xl text-xl">
              <p style={{ color: "#304352" }}>
                Healthcare workers are lacking basic personal protective
                equipment (PPE) while fighting the COVID-19 pandemic, putting themselves and their loved ones
                in danger. Help us deliver critically needed supplies so they can safely continue saving lives.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="p-8 flex items-center flex flex-col">
          <h2 className="font-mono md:text-5xl" style={{ color: "#304352" }}>
            Our Mission
          </h2>
          <Markdown className="text-xl markdown-body">{data.mission}</Markdown>
          <p>{data.mission}</p>
        </section> */}

        <section className="md:p-16 p-8 flex flex-wrap-reverse">
          <div class="flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ...">
            <img style={{ width: "100%" }} src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg" alt="3D for COVID" />
            <p class="center" style={{ textAlign: "center" }}><a href="https://3dforcovid.com/" target="_blank"><u>3D for COVID</u></a></p>
          </div>
          <div class="flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ...">
            <img style={{ width: "100%" }} src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg" alt="Fairfax County Public Libraries" />
            <p class="center" style={{ textAlign: "center" }}><a href="https://www.fairfaxcounty.gov/library/" target="_blank"><u>FCPL</u></a></p>
          </div>
          <div class="flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ...">
            <img style={{ width: "100%" }} src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg" alt="Lets Breathe" />
            <p class="center" style={{ textAlign: "center" }}><a href="https://www.gofundme.com/f/gofundmecomfmasks-for-healthcare-heroes" target="_blank"><u>Lets Breathe</u></a></p>
          </div>
          <div class="flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ...">
            <img style={{ width: "100%" }} src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg" alt="Mika Naraynsingh" style={{ "width": "100%" }} />
            <p class="center" style={{ textAlign: "center" }}>Mika Naraynsingh</p>
          </div>
        </section>

        <section className="md:p-16 p-8 flex flex-wrap-reverse">
          <div class="flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ...">
            <img style={{ width: "100%" }} src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg" alt="3D for COVID" />
            <p class="center" style={{ textAlign: "center" }}><a href="https://3dforcovid.com/" target="_blank"><u>3D for COVID</u></a></p>
          </div>
          <div class="flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ...">
            <img style={{ width: "100%" }} src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg" alt="Fairfax County Public Libraries" />
            <p class="center" style={{ textAlign: "center" }}><a href="https://www.fairfaxcounty.gov/library/" target="_blank"><u>FCPL</u></a></p>
          </div>
          <div class="flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ...">
            <img style={{ width: "100%" }} src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg" alt="Lets Breathe" />
            <p class="center" style={{ textAlign: "center" }}><a href="https://www.gofundme.com/f/gofundmecomfmasks-for-healthcare-heroes" target="_blank"><u>Lets Breathe</u></a></p>
          </div>
          <div class="flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ...">
            <img style={{ width: "100%" }} src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg" alt="Mika Naraynsingh" style={{ "width": "100%" }} />
            <p class="center" style={{ textAlign: "center" }}>Mika Naraynsingh</p>
          </div>
        </section>

        {/* <section className="p-8 flex items-center flex flex-col">
          <h2 className="font-mono md:text-5xl" style={{ color: "#304352" }}>
            Our Team
          </h2>
          <br></br>
          <div class="grid grid-cols-4 gap-4">
            <div>
              <img
                className="h-64 w-64 transition-opacity duration-500 transform hover:-translate-y-1 hover:scale-110 hover:opacity-25 ease-in-out ..."
                src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg"
                style={{ title: "YOOOO", color: "white" }}>
              </img>
            </div>
            <div>
              <img
                className="h-64 w-64 opacity-100 hover:opacity-25 transition-opacity duration-1000 ease-out"
                src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg">
              </img>
            </div>
            <div>
              <img
                className="h-64 w-64"
                src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg">
              </img>
            </div>
            <div>
              <img
                className="h-64 w-64"
                src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg"
              >
              </img>
            </div>
            <div>
              <img
                className="h-64 w-64"
                src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg">
              </img>
            </div>
            <div>
              <img
                className="h-64 w-64"
                src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg">
              </img>
            </div>
            <div>
              <img
                className="h-64 w-64"
                src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg">
              </img>
            </div>
            <div>
              <img
                className="h-64 w-64"
                src="https://miro.medium.com/max/3078/1*fGv3Nm6TtYP_AC0eGa6Ejg.jpeg">
              </img>
            </div>
          </div>
        </section> */}
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
