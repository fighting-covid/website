import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import SEO from "../components/seo";
import React from "react";
import donate from "../assets/images/donation.jpeg";
import ReactGA from "react-ga";

ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/acknowledgments");

import ReactHoverObserver from 'react-hover-observer';


const Label = ({isHovering = false}, importedElement, imageTitle) => {
  if (isHovering) {
     return HoverText(importedElement, imageTitle);
    // return true;
  }
   return JustImage(importedElement, imageTitle);
  // return false;
}

const JustImage = (ack, imageTitle) => {
  // if(isHovering){
  log(dir);
  return (
    
    <a href={ack.link} target="_blank">
       <img
         src={require(`../assets/images/acknowledgments/${imageTitle}`)}
         alt="hihihihihihihi"
         className="w-full h-full object-cover"
       />
     </a>
  );
  
  // }
  return (
    <a href={ack} target="_blank">
     <img
       src={require(`../assets/images/acknowledgments/fcpl.jpg`)}
       alt="i am so cool"
       className="w-full h-full object-cover"
     />
   </a>
);
}   

function HoverText(ack, imageTitle) {
  return (
      <a href={ack} target="_blank">
       <img
         src={require(`../assets/images/acknowledgments/fcpl.jpg`)}
         alt="i am so cool"
         className="w-full h-full object-cover"
       />
     </a>
  );
}   




const Acknowledgments = ({ data }) => {
  return (
    <>
      <SEO title="Acknowledgments" />
      <main>
        <section className="container my-12">
          <div className="text-center">
            <h1 className="heading">{data.title}</h1>
          </div>
          <Markdown className="text-xl markdown-body mb-4 mx-auto text-center">
            {data.subtitle}
          </Markdown>
        </section>
        <section className="mx-auto px-8 md:w-11/12">
          <div className="flex flex-wrap items-center justify-center -mx-6">
            {data.acknowledgments.map((ack, i) => {
              const title = new String(ack.image);
              return(
              <div
                className={`trans cursor-pointer w-full sm:w-1/2 md:${ack.width || "w-1/3"} px-4 pb-8`}
                key={i}
              >
                <div className="shadow duration-500 ease-in-out hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border border-dark-secondary rounded">
                  
                  <ReactHoverObserver className="flex items-center justify-center">                    
                      <Label importedElement={ack} imageTitle={title}/> 
                      {/* for some reason ack.image is undefined? */}
                      
                  </ReactHoverObserver>
                  <p
                    className="text-light bg-dark text-center text-xl py-2"
                    style={{ minHeight: "50px" }}
                  >
                    {ack.title}
                  </p>
                </div>
              </div>
            )})}
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), "data/acknowledgments.yml");
  const data = yaml.safeLoad(fs.readFileSync(dataPath));
  return { props: { data } };
}

export default Acknowledgments;
