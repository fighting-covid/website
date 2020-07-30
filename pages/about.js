import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import outreach from "../assets/images/deal.png";
import webdev2 from "../assets/images/code5.png";
import sewing2 from "../assets/images/sewing3.png";
import three from "../assets/images/plastic.png";
import publicity2 from "../assets/images/marketing.png";
import eprinting from "../assets/images/sketch.png";
import funds from "../assets/images/donation.png";
import tutorials from "../assets/images/intelligence.png";
import background from "../assets/images/masks_darkened1.jpg";
import Popup from "reactjs-popup";
import SEO from "../components/seo";
import ReactGA from "react-ga";
import Markdown from "react-markdown";
ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/about");

const AboutPage = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <main>
        <section className="pr-8 pl-8 pt-8 pb-4 md:pb-8">
          <div className="flex justify-center">
            <h2
              className="font-mono md:text-4xl text-3xl heading"
              style={{ color: "black" }}
            >
              Our Mission
            </h2>
          </div>
          <Markdown className="text-xl markdown-body md:w-11/12 mb-4 mx-auto text-center">
            {
              "We are a group of students working to connect hospitals in the DC-Maryland-Virginia region with desperately needed supplies in the wake of the COVID-19 pandemic. Our team is also working on independently producing hospital-approved Personal Protective Equipment (PPE) and other items, with the eventual vision of support healthcare workers during this time of crisis and shortage."
            }
          </Markdown>
        </section>

        <div className="flex mt-5 items-center">
          <div className="w-1/6 md:w-1/4"></div>
          <p
            className="w-2/3 md:w-1/2 pr-8 pl-8 pt-2 text-center font-mono md:text-2xl text-2xl pb-4"
            style={{ color: "whitesmoke", backgroundColor: "#304352" }}
          >
            Founder and Coordinator: Reevu Adakroy
          </p>
          <div className="w-1/6 md:w-1/4"></div>
        </div>

        {/* Row 1, lg screens and beyond, 4 in a row */}
        <div className="sm:hidden lg:block">
          <section className="md:pr-16 md:pl-16 md:pt-16 pr-8 pl-8 pt-8 flex items-center flex-col md:flex-row">
            {/* WebDev */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={webdev2}
                    alt="3D for COVID"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Web Development
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Web Development
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Web Development team has been working hard to
                    create a platform to host our network and share our progress
                    and research with the community. Their work has led to the
                    creation of this website.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Aryan Chinnala and Varun Chilukuri
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Nuha Mohammed, Akash Bhave, and Jason Klein
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Sewing */}
            <Popup
              trigger={
                <div
                  className="my-5 md:my-0 cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={sewing2}
                    alt="Fairfax County Public Libraries"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Sewing
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Sewing
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Sewing team is working on maximizing the
                    comfort and effectiveness of sewn masks through material
                    choice and stitching techniques. They have continued to work
                    with hospitals regarding the specific needs of each facility
                    and are aiming to ramp up production to account for the
                    current mask shortage as soon as possible.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Lead:
                    </span>{" "}
                    Cynthia Wang
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Victoria Lu, Angie Huang, Priyanka Mosur, and Maanya Shanker
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Publicity */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={publicity2}
                    alt="Lets Breathe"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Publicity
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Publicity
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Publicity team's objective is to update the
                    public about our progress as a team, as well as to educate
                    the community on the best ways to stay safe and help out
                    during this pandemic.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Kashika Dhanjal, Khushmeet Chandi, Anika Thatavarty, and
                    Jennifer Abraham
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Akila Islam, Angie Huang, Anoushka Sarkar, Brianna Ta, Emma
                    Cheng, Jay Siva, Rhea Vidhyababu, Krithika Layagala, Reva
                    Hirave, Rhea Tammireddi, Simar Narula, and Vyomika Ghandi
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* 3D Printing */}
            <Popup
              trigger={
                <div
                  className="my-5 md:my-0 cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={three}
                    alt="Mika Naraynsingh"
                    style={{ width: "100%" }}
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    3D Printing
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    3D Printing
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The 3D Printing team is responsible for the
                    creation, collection, and prototyping of designs for various
                    tools to help aid the COVID-19 relief effort, as well as the
                    eventual mass production of said materials to be distributed
                    to organizations in need.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Joshua Lian and Tharun Saravanan
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Kareem Jaber, Daniel Lian, and Ron Nachum
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </section>
        </div>

        {/* Row 2, lg screens and beyond, 4 in a row */}
        <div className="sm:hidden lg:block">
          <section className="md:pr-16 md:pl-16 md:pb-16 pr-8 pl-8 pb-8 flex items-center flex-col md:flex-row">
            {/* Funds */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={funds}
                    alt="3D for COVID"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Funds
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Funds
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Funds team is working to raise money for YCRO
                    and help compensate costs for our volunteers.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Catie Granum and Vishal Kanigicherla
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Outreach */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column my-5 w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={outreach}
                    alt="Fairfax County Public Libraries"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Outreach
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Outreach
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Outreach team is in charge of all
                    correspondence between facilities in need and the YCRO,
                    managing all requests for materials and keeping track of
                    where supplies need to go for maximum impact.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Marian Qian and Aryan Joshi
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Angie Huang, Jay Siva, Saanjh Khattar, Sarah Zhang, and
                    Shing Gao
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Tutorials */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={tutorials}
                    alt="Lets Breathe"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Tutorials
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Tutorials
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Tutorials team is in charge of producing
                    quality content to inform volunteers how to assisst in
                    producing PPE at home.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Lead:
                    </span>{" "}
                    Hashir Aqeel
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Vyomika Gandhi, Rhea Goswami, Maxwell Bai, Yulee Kang, and
                    Kareem Jaber
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Innovative Design */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column my-5 w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={eprinting}
                    alt="Mika Naraynsingh"
                    style={{ width: "100%" }}
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Innovative Design
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Innovative Design
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Innovative Design team is designing and
                    producing PPE that doesn't require the use of 3D printers or
                    sewing machines. Their products include origami ear savers,
                    face masks, and face shields.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Jason Wang and Maanya Shanker
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Marian Qian, Angie Huang, Amanda Nguyen, Saketh Kura, Maria
                    Izzi, and Thomas Lu
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </section>
        </div>

        {/* Row 1, md screens and beyond, 3 in a row */}
        <div className="hidden md:block lg:hidden">
          <section className="md:pr-16 md:pl-16 md:pt-16 pr-8 pl-8 pt-8 flex items-center flex-col md:flex-row">
            {/* WebDev */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={webdev2}
                    alt="3D for COVID"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Web Development
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Web Development
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Web Development team has been working hard to
                    create a platform to host our network and share our progress
                    and research with the community. Their work has led to the
                    creation of this website.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Aryan Chinnala and Varun Chilukuri
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Nuha Mohammed, Akash Bhave, and Jason Klein
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Sewing */}
            <Popup
              trigger={
                <div
                  className="my-5 md:my-0 cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={sewing2}
                    alt="Fairfax County Public Libraries"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Sewing
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Sewing
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Sewing team is working on maximizing the
                    comfort and effectiveness of sewn masks through material
                    choice and stitching techniques. They have continued to work
                    with hospitals regarding the specific needs of each facility
                    and are aiming to ramp up production to account for the
                    current mask shortage as soon as possible.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Lead:
                    </span>{" "}
                    Cynthia Wang
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Victoria Lu, Angie Huang, Priyanka Mosur, and Maanya Shanker
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Publicity */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={publicity2}
                    alt="Lets Breathe"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Publicity
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Publicity
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Publicity team's objective is to update the
                    public about our progress as a team, as well as to educate
                    the community on the best ways to stay safe and help out
                    during this pandemic.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Kashika Dhanjal, Khushmeet Chandi, Anika Thatavarty, and
                    Jennifer Abraham
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Akila Islam, Angie Huang, Anoushka Sarkar, Brianna Ta, Emma
                    Cheng, Jay Siva, Rhea Vidhyababu, Krithika Layagala, Reva
                    Hirave, Rhea Tammireddi, Simar Narula, and Vyomika Ghandi
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </section>
        </div>

        {/* Row 2, md screens and beyond, 3 in a row */}
        <div className="hidden md:block lg:hidden">
          <section className="md:pr-16 md:pl-16 md:pt-16 pr-8 pl-8 pt-8 flex items-center flex-col md:flex-row">
            {/* 3D Printing */}
            <Popup
              trigger={
                <div
                  className="my-5 md:my-0 cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={three}
                    alt="Mika Naraynsingh"
                    style={{ width: "100%" }}
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    3D Printing
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    3D Printing
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The 3D Printing team is responsible for the
                    creation, collection, and prototyping of designs for various
                    tools to help aid the COVID-19 relief effort, as well as the
                    eventual mass production of said materials to be distributed
                    to organizations in need.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Joshua Lian and Tharun Saravanan
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Kareem Jaber, Daniel Lian, and Ron Nachum
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Funds */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={funds}
                    alt="3D for COVID"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Funds
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Funds
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Funds team is working to raise money for YCRO
                    and help compensate costs for our volunteers.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Catie Granum and Vishal Kanigicherla
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Outreach */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column my-5 w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={outreach}
                    alt="Fairfax County Public Libraries"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Outreach
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Outreach
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Outreach team is in charge of all
                    correspondence between facilities in need and the YCRO,
                    managing all requests for materials and keeping track of
                    where supplies need to go for maximum impact.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Marian Qian and Aryan Joshi
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Angie Huang, Jay Siva, Saanjh Khattar, Sarah Zhang, and
                    Shing Gao
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </section>
        </div>

        {/* Row 3, md screens and beyond, 2 in a row */}
        <div className="hidden md:block lg:hidden">
          <section className="md:pr-16 md:pl-16 md:pt-16 pr-8 pl-8 pt-8 flex items-center flex-col md:flex-row">
            {/* Tutorials */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={tutorials}
                    alt="Lets Breathe"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Tutorials
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Tutorials
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Tutorials team is in charge of producing
                    quality content to inform volunteers how to assisst in
                    producing PPE at home.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Lead:
                    </span>{" "}
                    Hashir Aqeel
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Vyomika Gandhi, Rhea Goswami, Maxwell Bai, Yulee Kang, and
                    Kareem Jaber
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Innovative Design */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column my-5 w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={eprinting}
                    alt="Mika Naraynsingh"
                    style={{ width: "100%" }}
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Innovative Design
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Innovative Design
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Innovative Design team is designing and
                    producing PPE that doesn't require the use of 3D printers or
                    sewing machines. Their products include origami ear savers,
                    face masks, and face shields.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Jason Wang and Maanya Shanker
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Marian Qian, Angie Huang, Amanda Nguyen, Saketh Kura, Maria
                    Izzi, and Thomas Lu
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
            <div className="sm:w-0 lg:w-0 md:w-1/3"></div>
          </section>
        </div>

        {/* Row 1 sm screens to md screens, 2 in a row */}
        <div className="hidden sm:block md:hidden">
          <section className="md:pr-16 md:pl-16 md:pt-16 pr-8 pl-8 pt-8 flex items-center md:flex-row">
            {/* WebDev */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={webdev2}
                    alt="3D for COVID"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Web Development
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Web Development
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Web Development team has been working hard to
                    create a platform to host our network and share our progress
                    and research with the community. Their work has led to the
                    creation of this website.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Aryan Chinnala and Varun Chilukuri
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Nuha Mohammed, Akash Bhave, and Jason Klein
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Sewing */}
            <Popup
              trigger={
                <div
                  className="my-5 md:my-0 cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={sewing2}
                    alt="Fairfax County Public Libraries"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Sewing
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Sewing
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Sewing team is working on maximizing the
                    comfort and effectiveness of sewn masks through material
                    choice and stitching techniques. They have continued to work
                    with hospitals regarding the specific needs of each facility
                    and are aiming to ramp up production to account for the
                    current mask shortage as soon as possible.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Lead:
                    </span>{" "}
                    Cynthia Wang
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Victoria Lu, Angie Huang, Priyanka Mosur, and Maanya Shanker
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </section>
        </div>

        {/* Row 2 sm screens to md screens, 2 in a row */}
        <div className="hidden sm:block md:hidden">
          <section className="md:pr-16 md:pl-16 md:pt-16 pr-8 pl-8 pt-8 flex items-center md:flex-row">
            {/* Publicity */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={publicity2}
                    alt="Lets Breathe"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Publicity
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Publicity
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Publicity team's objective is to update the
                    public about our progress as a team, as well as to educate
                    the community on the best ways to stay safe and help out
                    during this pandemic.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Kashika Dhanjal, Khushmeet Chandi, Anika Thatavarty, and
                    Jennifer Abraham
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Akila Islam, Angie Huang, Anoushka Sarkar, Brianna Ta, Emma
                    Cheng, Jay Siva, Rhea Vidhyababu, Krithika Layagala, Reva
                    Hirave, Rhea Tammireddi, Simar Narula, and Vyomika Ghandi
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* 3D Printing */}
            <Popup
              trigger={
                <div
                  className="my-5 md:my-0 cursor-pointer column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={three}
                    alt="Mika Naraynsingh"
                    style={{ width: "100%" }}
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    3D Printing
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    3D Printing
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The 3D Printing team is responsible for the
                    creation, collection, and prototyping of designs for various
                    tools to help aid the COVID-19 relief effort, as well as the
                    eventual mass production of said materials to be distributed
                    to organizations in need.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Joshua Lian and Tharun Saravanan
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Kareem Jaber, Daniel Lian, and Ron Nachum
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </section>
        </div>

        {/* Row 3 sm screens to md screens, 2 in a row */}
        <div className="hidden sm:block md:hidden">
          <section className="md:pr-16 md:pl-16 md:pt-16 pr-8 pl-8 pt-8 flex items-center md:flex-row">
            {/* Funds */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={funds}
                    alt="3D for COVID"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Funds
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Funds
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Funds team is working to raise money for YCRO
                    and help compensate costs for our volunteers.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Catie Granum and Vishal Kanigicherla
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Outreach */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column my-5 w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={outreach}
                    alt="Fairfax County Public Libraries"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Outreach
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Outreach
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Outreach team is in charge of all
                    correspondence between facilities in need and the YCRO,
                    managing all requests for materials and keeping track of
                    where supplies need to go for maximum impact.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Marian Qian and Aryan Joshi
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Angie Huang, Jay Siva, Saanjh Khattar, Sarah Zhang, and
                    Shing Gao
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </section>
        </div>

        {/* Row 4 sm screens to md screens, 2 in a row */}
        <div className="hidden sm:block md:hidden">
          <section className="md:pr-16 md:pl-16 md:pt-16 pr-8 pl-8 pt-8 flex items-center md:flex-row">
            {/* Tutorials */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={tutorials}
                    alt="Lets Breathe"
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Tutorials
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Tutorials
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Tutorials team is in charge of producing
                    quality content to inform volunteers how to assisst in
                    producing PPE at home.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Lead:
                    </span>{" "}
                    Hashir Aqeel
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Vyomika Gandhi, Rhea Goswami, Maxwell Bai, Yulee Kang, and
                    Kareem Jaber
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>

            {/* Innovative Design */}
            <Popup
              trigger={
                <div
                  className="cursor-pointer flex-1 column my-5 w-3/4 md:w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..."
                  style={{ background: "#304352" }}
                >
                  <img
                    className="bg-light"
                    style={{ width: "100%" }}
                    src={eprinting}
                    alt="Mika Naraynsingh"
                    style={{ width: "100%" }}
                  />
                  <p
                    className="center"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    Innovative Design
                  </p>
                </div>
              }
              modal
            >
              {(close) => (
                <div className="modal" style={{ background: "#304352" }}>
                  <a
                    className="close cursor-pointer ml-2"
                    style={{ color: "white" }}
                    onClick={close}
                  >
                    &times;
                  </a>
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#e44c65",
                      fontWeight: "bold",
                    }}
                  >
                    Innovative Design
                  </h2>
                  <div className="px-2" style={{ color: "white" }}>
                    <br></br>The Innovative Design team is designing and
                    producing PPE that doesn't require the use of 3D printers or
                    sewing machines. Their products include origami ear savers,
                    face masks, and face shields.
                  </div>
                  <br></br>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Leads:
                    </span>{" "}
                    Jason Wang and Maanya Shanker
                  </div>
                  <div className="px-2" style={{ color: "white" }}>
                    <span style={{ color: "#e44c65", fontWeight: "bold" }}>
                      Team:
                    </span>{" "}
                    Marian Qian, Angie Huang, Amanda Nguyen, Saketh Kura, Maria
                    Izzi, and Thomas Lu
                  </div>
                  <br></br>
                  <div className="w-auto inline-block flex items-center justify-center pb-2">
                    <button
                      className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-accent-secondary"
                      onClick={() => {
                        close();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </section>
        </div>
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

{
  /*
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
                style={{ color: "white" }}
              >
                Our Mission
              </p>
            </div>
            <div className="text-left font-mono lg:text-2xl text-xl">
              <p style={{ color: "white" }}>
                We are a group of students working to connect hospitals in the
                DC-Maryland-Virginia region with desperately needed supplies in
                the wake of the COVID-19 pandemic. Our team is also working on
                independently producing hospital-approved Personal Protective
                Equipment (PPE) and other items, with the eventual vision of
                organizing households across the DMV into a production center to
                support healthcare workers during this time of crisis and
                shortage.
              </p>
            </div>
          </div>
        </section>
          */
}

{
  /* <section className="p-8 flex items-center flex flex-col">
          <h2 className="font-mono md:text-5xl" style={{ color: "#304352" }}>
            Our Mission
          </h2>
          <Markdown className="text-xl markdown-body">{data.mission}</Markdown>
          <p>{data.mission}</p>
        </section> */
}

{
  /* <section className="p-8 flex items-center flex flex-col">
          <h2 className="font-mono md:text-5xl" style={{ color: "#304352" }}>
            Our Team
          </h2>
          <br></br>
          <div className="grid grid-cols-4 gap-4">
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
        </section> */
}
