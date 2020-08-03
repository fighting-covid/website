import Markdown from "react-markdown";
import SEO from "../components/seo";
import React from "react";
import osms from "../assets/images/acknowledgments/osms.jpg";
import fcpl from "../assets/images/acknowledgments/fcpl.jpg";
import covid from "../assets/images/acknowledgements/3d-for-covid.jpg";
import mfd from "../assets/images/acknowledgements/masks-for-docs.jpg";
import mn from "../assets/images/acknowledgements/mika-naraynsingh.jpg";
import donate from "../assets/images/donation.jpeg";
import breathe from "../assets/images/acknowledgements/lets-breathe.jpg";
import ReactGA from "react-ga";

ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/acknowledgments");

const Acknowledgments = ({ data }) => {
  return (
    <>
      <SEO title="Acknowledgments" />
      <main>
        <section className="pr-8 pl-8 pt-8 pb-4 md:pb-8">
          <div className="flex justify-center">
            <h2
              className="font-mono md:text-4xl text-3xl heading"
              style={{ color: "black" }}
            >
              Acknowledgments
            </h2>
          </div>
          <Markdown className="text-xl markdown-body mb-4 mx-auto text-center">
            {
              "We would like to thank everyone who helped us deliver PPE to frontline workers."
            }
          </Markdown>
        </section>

        {/* md and beyond */}
        <div class="sm:hidden lg:block" >
          <section className="md:pr-8 pr-8 md:pt-8 pt-8 md:pl-8 pl-8 md:pb-6 pb-0">
            <div className="flex items-center flex-col md:flex-row">

              {/* Mika Naraynsingh */}
              <div
                class="h-full w-3/4 md:w-4/12 mx-3 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
                style={{ background: "#304352" }}
              >
                <img src={mn} alt="Mika Naraynsingh" style={{ width: "100%" }} />
                <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                  Mika Naraynsingh
              </p>
              </div>

              {/* MasksforDocs */}
              <div
                class="h-full w-3/4 md:w-1/5 mx-16 my-5 md:my-0 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
                style={{ background: "#304352" }}
              >
                
                <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                  <a href="https://masksfordocs.com" target="_blank">
                    <img style={{ width: "100%" }} src={mfd} alt="Masks for Docs" />
                    Masks for Docs
                  </a>
                </p>
              </div>

              {/* Fairfax County Public Libraries */}
              <div
                class="h-full w-3/4 md:w-5/12 mx-3 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
                style={{ background: "#304352" }}
              >
                
                <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                  <a href="https://www.fairfaxcounty.gov/library/" target="_blank">
                    <img
                    style={{ width: "100%" }}
                    src={fcpl}
                    alt="Fairfax County Public Libraries"
                    />
                    Fairfax County Public Libraries
                  </a>
                </p>
              </div>

            </div>
          </section>
        </div>

        <div class= "sm:hidden lg:block">
          <section className="md:p-8 pr-8 pl-8 pb-8 pt-4">
          <div className="flex items-center flex-col md:flex-row">

            {/* 3dforcovid */}
            <div
              class="h-full w-3/4 md:w-1/4 mx-3 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
              style={{ background: "#304352" }}
            >
              
              <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                <a href="https://3dforcovid.com/" target="_blank">
                  <img style={{ width: "100%" }} src={covid} alt="3D for COVID" />
                  3D for COVID
                </a>
              </p>
            </div>

            {/* Open Source Medical Supplies */}
            <div
              class="h-full w-3/4 md:w-1/2 mx-16 my-5 md:my-0 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
              style={{ background: "#304352" }}
            >
              
              <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                  
                <a href="https://opensourcemedicalsupplies.org/" target="_blank">
                    <img
                    style={{ width: "100%" }}
                    src={osms}
                    alt="Open Source COVID19 Medical Supplies"
                  />
                  Open Source Medical Supplies
                </a>
              </p>
            </div>

            {/* Let's Breathe */}
            <div
              class="h-full w-3/4 md:w-1/4 column mx-3 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
              style={{ background: "#304352" }}
            >
              
              <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                <a href="https://sites.google.com/view/lets-breathe/home?authuser=0" target="_blank">
                  <img
                  style={{ width: "100%" }}
                  src={breathe}
                  alt="Lets Breathe"
                />
                  Let's Breathe
                </a>
              </p>
            </div>

          </div>
        </section>
        </div>

        {/* sm to md */}
        <div class="hidden sm:block lg:hidden" >
          <section className="md:pr-8 pr-8 md:pt-8 pt-8 md:pl-8 pl-8 md:pb-6 pb-0">
            <div className="flex items-center flex-col md:flex-row">

              {/* Mika Naraynsingh */}
              <div
                class="h-full w-3/4 mx-3 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
                style={{ background: "#304352" }}
              >
                <img src={mn} alt="Mika Naraynsingh" style={{ width: "100%" }} />
                <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                  Mika Naraynsingh
              </p>
              </div>

              {/* MasksforDocs */}
              <div
                class="h-full w-3/4 mx-16 my-5 md:my-0 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
                style={{ background: "#304352" }}
              >
                
                <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                  <a href="https://masksfordocs.com" target="_blank">
                    <img style={{ width: "100%" }} src={mfd} alt="Masks for Docs" />
                    Masks for Docs
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        <div class= "hidden sm:block lg:hidden">
          <section className="md:p-8 pr-8 pl-8 pb-8 pt-4">
          <div className="flex items-center flex-col md:flex-row">
            
            {/* 3dforcovid */}
            <div
              class="h-full w-3/4 mx-3 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
              style={{ background: "#304352" }}
            >
              
              <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                <a href="https://3dforcovid.com/" target="_blank">
                  <img style={{ width: "100%" }} src={covid} alt="3D for COVID" />
                  3D for COVID
                </a>
              </p>
            </div>

            {/* Fairfax County Public Libraries */}
            <div
                class="h-full w-3/4 mx-3 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
                style={{ background: "#304352" }}
              >
                
                <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                  <a href="https://www.fairfaxcounty.gov/library/" target="_blank">
                    <img
                    style={{ width: "100%" }}
                    src={fcpl}
                    alt="Fairfax County Public Libraries"
                    />
                    Fairfax County Public Libraries
                  </a>
                </p>
              </div>

          </div>
        </section>
        </div>

        <div class= "hidden sm:block lg:hidden">
          <section className="md:pr-8 pr-8 md:pt-8 pt-8 md:pl-8 pl-8 md:pb-6 pb-0">
            <div className="flex items-center flex-col md:flex-row">

              {/* Open Source Medical Supplies */}
            <div
              class="h-full w-3/4 md:w-1/2 mx-16 my-5 md:my-0 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
              style={{ background: "#304352" }}
            >
              
              <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                  
                <a href="https://opensourcemedicalsupplies.org/" target="_blank">
                    <img
                    style={{ width: "100%" }}
                    src={osms}
                    alt="Open Source COVID19 Medical Supplies"
                  />
                  Open Source Medical Supplies
                </a>
              </p>
            </div>

            {/* Let's Breathe */}
            <div
              class="h-full w-3/4 md:w-1/4 column mx-3 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ..."
              style={{ background: "#304352" }}
            >
              
              <p class="center" style={{ textAlign: "center", color: "#FFFFFF" }}>
                <a href="https://sites.google.com/view/lets-breathe/home?authuser=0" target="_blank">
                  <img
                  style={{ width: "100%" }}
                  src={breathe}
                  alt="Lets Breathe"
                />
                  Let's Breathe
                </a>
              </p>
            </div>


            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Acknowledgments;
