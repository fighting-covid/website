import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import background from "../assets/images/background2.jpg";
import josh from "../assets/images/donation.jpeg"
import sewing from "../assets/images/sewingPPE.png"
import sewing5 from "../assets/images/sewing5.jpeg"
import sewingg from "../assets/images/sewing2.jpg"
import printer from "../assets/images/3d-printer.jpg"
import innovative from "../assets/images/V7.jpg"
import mask from "../assets/images/n95.jpg"
import Markdown from "react-markdown";

import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

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

        <section className="text-dark">
          {/*Carousel Documentation *IMPORTANT*: https://github.com/leandrowd/react-responsive-carousel/blob/master/stories/01-basic.tsx */}

          <Carousel interval={5000} swipeable autoPlay useKeyboardArrows infiniteLoop stopOnHover={false} showThumbs={false}>
            <div>
              <img
                className="w-full h-full bg-local object-cover bg-no-repeat bg-center absolute inset-0"
                src={background}
              ></img>
              <div className="md:pt-20 md:pb-20 md:ml-6 p-4 flex flex-col items-left relative">
                <div>
                  <p className="text-left font-mono lg:text-5xl text-4xl pb-4">
                    Youth COVID-19 Relief Organization
                  </p>
                </div>
                <div className="text-left md:w-1/3 mb-10 font-mono lg:text-2xl text-xl">
                  <p>
                    Healthcare workers are lacking basic personal protective
                    equipment (PPE) while fighting the COVID-19 pandemic, putting
                    themselves and their loved ones in danger. Help us deliver
                    critically needed supplies so they can safely continue saving
                    lives.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                className="-mb-32 w-full h-full bg-local object-cover bg-no-repeat bg-center absolute inset-0"
                src={printer}
              ></img>
              <p className="legend">Visit the <a href="/ppe/make/3d"><u>3D printing</u></a> page for PPE designs you can print at home.</p>
            </div>
            <div>
              <img
                className="-mb-32 w-full h-full bg-local object-cover bg-no-repeat bg-center absolute inset-0"
                src={innovative}
              ></img>
              <p className="legend">Visit the <a href="/ppe/make/low-tech-ppe"><u>low tech PPE</u></a> page to find ways that you can aid in fighting the pandemic without having to use any technology.</p>
            </div>
            <div>
              <img
                className="-mb-32 w-full h-full bg-local object-cover bg-no-repeat bg-center absolute inset-0"
                src={josh}
              ></img>
              <p className="legend">Visit the <a href="/newsletter"><u>newsletter</u></a> page to stay up-to-date with recent coronavirus information and YCRO related news.</p>
            </div>
            <div>
              <img
                className="-mb-32 w-full h-full bg-local object-cover bg-no-repeat bg-center absolute inset-0"
                src={sewing}
              ></img>
              <p className="legend">Visit the <a href="/ppe/make/sewing"><u>sewing</u></a> page for instructions and guidelines on making sewn masks to protect yourself and preserve supplies for our frontline workers.</p>
            </div>
          </Carousel>
        </section>

        <section className="lg:p-16 lg:pl-40 p-8 flex flex-wrap-reverse">
          <div
            className="border-2 border-gray-500 lg:w-1/2 w-full"
            style={{ height: "60vh" }}
          >
            <iframe
              className="visual"
              src="https://www.google.com/maps/d/u/4/embed?mid=1QTmhpmhOxj5GOAQPhUczgMgYIlPHJQrT&z=8"
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </div>
          <div className="lg:p-16 lg:pr-40 pb-8 lg:w-1/2 w-full flex flex-col lg:justify-center justify-end">
            <div>
              <h2 className="heading heading-h2">Hospitals in Need</h2>
            </div>
            <Markdown className="markdown-body text-lg">
              This map shows hospitals that we've contacted which currently need
              supplies. Click on the location icons on the map to see more
              information.
            </Markdown>
          </div>
        </section>

        <section className="lg:p-16 lg:pr-40 p-8 flex flex-wrap">
          <div className="lg:pr-24 lg:pl-40 pb-8 lg:w-1/2 w-full flex flex-col lg:justify-center justify-end">
            <div>
              <h2 className="heading">Requests</h2>
            </div>
            <Markdown className="markdown-body text-lg mb-4">
              This graph displays the quantities of sewn face masks and 3D
              printed face shields that hospitals need. Hover over the bars for
              exact values.
            </Markdown>
            <div>
              <button className="trans button">
                <Link href="/ppe/request">
                  <a>Request PPE</a>
                </Link>
              </button>
            </div>
          </div>

          <div
            className="lg:w-1/2 w-full flex flex-col lg:justify-center justify-start"
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

        <section className="lg:p-16 lg:pl-40 p-8 flex flex-wrap-reverse">
          <div
            className="lg:w-1/2 w-full flex flex-col lg:justify-center justify-start"
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
          <div className="lg:p-16 lg:pr-40 pb-8 lg:w-1/2 w-full flex flex-col lg:justify-center justify-end">
            <div>
              <h2 className="heading">Donations</h2>
            </div>
            <Markdown className="markdown-body text-lg mb-8">
              This graph shows the quantities of PPE we have already coordinated
              donations for. Hover over the bars for exact values.
            </Markdown>
            <div>
              <button className="trans button">
                <Link href="/ppe/donate">
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
