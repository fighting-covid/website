import Head from "next/head";
import yaml from "js-yaml";
import fs from "fs";
import path from "path";

const HomePage = ({ data }) => (
  <>
    <Head>
      <title>Project YCRO</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <section className="block">
        <div
          className="flex flex-wrap-reverse"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <div className="md:w-1/2 w-full p-16">
            <div className="md:w-3/4 h-full flex flex-col md:justify-center justify-start">
              <p className="font-bold font-serif md:text-5xl text-4xl pb-4">
                {data.title}
              </p>
              <p className="font-sans lg:text-2xl text-xl">{data.subtitle}</p>
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
    </main>
  </>
);

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/index.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default HomePage;
