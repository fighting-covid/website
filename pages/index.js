import Head from "next/head";
import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";

const HomePage = ({ data }) => (
  <>
    <Head>
      <title>Project YCRO</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <section className="mb-16">
        <div
          className="flex flex-wrap-reverse"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <div className="md:w-1/2 w-full p-16">
            <div className="md:w-3/4 h-full flex flex-col md:justify-center justify-start">
              <p className="font-bold font-serif md:text-5xl text-4xl pb-4">
                {data.title}
              </p>
              <p className="font-sans lg:text-2xl text-xl">
                <Markdown className="markdown-body">{data.subtitle}</Markdown>
              </p>
            </div>
          </div>
          <div
            className="md:w-1/2 w-full flex flex-col bg-local bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${require("../assets/images/mask.jpg")})`,
            }}
          ></div>
        </div>
      </section>
      <section className="p-8 flex" style={{ height: "60vh" }}>
        <div className="border-2 border-gray-500 w-1/2">
          <iframe
            className="visual"
            src="https://www.google.com/maps/d/u/0/embed?mid=1EYwPfRTAqljYRM2A5VL514hlb2igE-J0&zoom=10"
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
        </div>
        <div className="p-8 w-1/2 flex flex-col justify-center">
          <div>
            <h2 className="font-serif font-bold md:text-4xl text-3xl heading">
              Hospitals
            </h2>
          </div>
          <Markdown className="markdown-body text-lg">
            {data.statistics.map}
          </Markdown>
        </div>
      </section>
    </main>
  </>
);

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/index.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default HomePage;
