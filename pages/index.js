import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import background from "../assets/images/background2.jpg";
import Markdown from "react-markdown";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import SEO from "../components/seo";
import ReactGA from "react-ga";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/");

const HomePage = ({ data }) => {
  const [graphRequestData, setGraphDonationData] = useState(null);
  useEffect(() => {
    const getGraphDonationData = async () => {
      const res = await axios.get("/api/data");
      setGraphDonationData(res.data["request_data"]);
    };
    getGraphDonationData();
  }, []);

  const [graphDonationData, setGraphRequestData] = useState(null);
  useEffect(() => {
    const getGraphRequestData = async () => {
      const res = await axios.get("/api/data");
      setGraphRequestData(res.data["donation_data"]);
    };
    getGraphRequestData();
  }, []);

  return (
    <>
      <SEO title="Home" />
      <main>
        <section className="md:mb-16 relative p-8 md:p-64">
          <img
            className="w-full h-full bg-local object-cover bg-no-repeat bg-center absolute inset-0"
            src={background}
            style={{ objectPosition: "50% 75%" }}
          ></img>
          <div className="p-4 flex flex-col items-left relative">
            <div>
              <p
                className="text-left font-mono md:text-5xl text-4xl pb-4"
                style={{ color: "#304352" }}
              >
                Youth COVID-19 Relief Organization
              </p>
            </div>
            <div className="text-left font-mono lg:text-2xl text-xl">
              <p style={{ color: "#304352" }}>
                Healthcare workers are lacking basic personal protective
                equipment (PPE) while fighting the COVID-19 pandemic, putting
                themselves and their loved ones in danger. Help us deliver
                critically needed supplies so they can safely continue saving
                lives.
              </p>
            </div>
          </div>
        </section>

        <section className="md:p-16 md:pl-40 p-8 flex flex-wrap-reverse">
          <div
            className="border-2 border-gray-500 md:w-1/2 w-full"
            style={{ height: "60vh" }}
          >
            <iframe
              className="visual"
              src="https://www.google.com/maps/d/u/4/embed?mid=1QTmhpmhOxj5GOAQPhUczgMgYIlPHJQrT&z=8"
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </div>
          <div className="md:p-16 md:pr-40 p-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
            <div>
              <h2
                className="font-mono md:text-4xl text-3xl"
                style={{ color: "#304352" }}
              >
                Hospitals in Need
              </h2>
              <br></br>
            </div>
            <Markdown className="markdown-body text-lg">
              This map shows hospitals that we've contacted which currently need
              supplies. Click on the location icons on the map to see more
              information.
            </Markdown>
          </div>
        </section>

        <section className="md:p-16 md:pr-40 p-8 flex flex-wrap">
          <div className="md:pr-24 md:pl-40 pb-10 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
            <div>
              <h2
                className="font-mono md:text-4xl text-3xl"
                style={{ color: "#304352" }}
              >
                Requests
              </h2>
              <br></br>
            </div>
            <Markdown className="markdown-body text-lg">
              This graph displays the quantities of sewn face masks and 3D
              printed face shields that hospitals need. Hover over the bars for
              exact values.
            </Markdown>
            <br></br>
            <div>
              <button className="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                <Link href="/ppe-request">
                  <a>Request PPE</a>
                </Link>
              </button>
            </div>
          </div>

          <div
            className="md:w-1/2 w-full flex flex-col md:justify-center justify-start"
            style={{ height: "60vh" }}
          >
            {graphRequestData !== null ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={graphRequestData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" orientation="bottom" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="masks"
                    name="Face Masks"
                    stackId="a"
                    fill="#1b237e"
                  />
                  <Bar
                    dataKey="shields"
                    name="Face Shields"
                    stackId="a"
                    fill="#2771b8"
                  />
                  <Bar
                    dataKey="savers"
                    name="Ear Savers"
                    stackId="a"
                    fill="#4ebbd6"
                  />
                  <Bar
                    dataKey="grabbers"
                    name="Door Grabbers"
                    stackId="a"
                    fill="#84b593"
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div></div>
            )}
          </div>
        </section>

        <section className="md:p-16 md:pl-40 p-8 flex flex-wrap-reverse">
          <div
            className="md:w-1/2 w-full flex flex-col md:justify-center justify-start"
            style={{ height: "60vh" }}
          >
            {graphDonationData !== null ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={graphDonationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" orientation="bottom" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="quantity"
                    name="Quantity"
                    stackId="a"
                    fill="#8884d8"
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div></div>
            )}
          </div>
          <div className="md:p-16 md:pr-40 p-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
            <div>
              <h2
                className="font-mono md:text-4xl text-3xl"
                style={{ color: "#304352" }}
              >
                Donations
              </h2>
              <br></br>
            </div>
            <Markdown className="markdown-body text-lg">
              This graph shows the quantities of PPE we have already coordinated
              donations for. Hover over the bars for exact values.
            </Markdown>
            <br></br>
            <div>
              <button className="bg-dark hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                <Link href="/ppe-donate">
                  <a>Donate PPE</a>
                </Link>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/index.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default HomePage;
