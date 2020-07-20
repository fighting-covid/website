import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import outreach from '../assets/images/outreach.jpg';
import publicity from '../assets/images/publicity.jpg';
import sewing from '../assets/images/sewing.jpg';
import webdev from '../assets/images/webdev.jpeg';
import dprinting from '../assets/images/3dprinting.jpg';
import eprinting from '../assets/images/2dprinting.jpg';
import funds from '../assets/images/funds.jpg';
import tutorials from '../assets/images/tutorials.jpg';
import background from '../assets/images/masks_darkened1.jpg';
import Popup from "reactjs-popup";
import SEO from "../components/seo";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-167321699-1');
ReactGA.pageview('/about');

const AboutPage = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <main>
        <section className="md:mb-16 relative p-8 md:p-64">
          <img
            className="w-full h-full bg-local object-cover bg-no-repeat bg-center absolute inset-0"
            src={background}
            style={{ objectPosition: "50% 75%" }}>
          </img>
          <div className="p-4 flex flex-col items-left relative">
            <div>
              <p className="text-left font-mono md:text-5xl text-4xl pb-4" style={{ color: "white" }}>
                Our Mission
              </p>
            </div>
            <div className="text-left font-mono lg:text-2xl text-xl">
              <p style={{ color: "white" }}>
                We are a group of students working to connect hospitals in the DC-Maryland-Virginia region with desperately needed supplies in the wake of the COVID-19 pandemic. Our team is also working on independently producing hospital-approved Personal Protective Equipment (PPE) and other items, with the eventual vision of organizing households across the DMV into a production center to support healthcare workers during this time of crisis and shortage.
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
          <Popup trigger={
            <div class="cursor-pointer flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..." style={{background: "#304352"}}>
              <img style={{ width: "100%" }} src={webdev} alt="3D for COVID" />
              <p class="center" style={{ textAlign: "center", color: "white"}}>Web Development</p>
            </div>
          } modal>
            {close => (
              <div className="modal" style={{background: "#304352"}}>
                <a className="close cursor-pointer ml-2" style={{color: "white"}} onClick={close}>
                  &times;
                </a>
                <h2 style={{ textAlign: "center", color: "#e44c65", fontWeight: "bold"}}>Web Development</h2>
                <div class="px-2" style={{color: "white"}}>
                  <br></br>The Web Development team has been working hard to create a platform to host our network and share our progress and research with the community. Their work has led to the creation of this website.
                </div>
                <br></br>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Leads:</span> Aryan Chinnala and Varun Chilukuri
                </div>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Team:</span> Nuha Mohammed, Ron Nachum, Aaryan Dave, Sarah Zhang
                </div>
                <br></br>
                <div class="w-auto inline-block flex items-center justify-center pb-2">
                  <button
                    className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-pinkDark"
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

          <Popup trigger={
            <div class="cursor-pointer flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..." style={{background: "#304352"}}>
              <img style={{ width: "100%" }} src={sewing} alt="Fairfax County Public Libraries" />
              <p class="center" style={{ textAlign: "center", color: "white"}}>Sewing</p>
            </div>
          } modal>
            {close => (
              <div className="modal" style={{background: "#304352"}}>
                <a className="close cursor-pointer ml-2" style={{color: "white"}} onClick={close}>
                  &times;
                </a>
                <h2 style={{ textAlign: "center", color: "#e44c65", fontWeight: "bold"}}>Sewing</h2>
                <div class="px-2" style={{color: "white"}}>
                  <br></br>The Sewing team is working on maximizing the comfort and effectiveness of sewn masks through material choice and stitching techniques. They have continued to work with hospitals regarding the specific needs of each facility and are aiming to ramp up production to account for the current mask shortage as soon as possible.
                </div>
                <br></br>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Leads:</span> Aryan Chinnala and Varun Chilukuri
                </div>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Team:</span> Nuha Mohammed, Ron Nachum, Aaryan Dave, Sarah Zhang
                </div>
                <br></br>
                <div class="w-auto inline-block flex items-center justify-center pb-2">
                  <button
                    className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-pinkDark"
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

          <Popup trigger={
            <div class="cursor-pointer flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..." style={{background: "#304352"}}>
              <img style={{ width: "100%" }} src={publicity} alt="Lets Breathe" />
              <p class="center" style={{ textAlign: "center", color: "white"}}>Publicity</p>
            </div>
          } modal>
            {close => (
              <div className="modal" style={{background: "#304352"}}>
                <a className="close cursor-pointer ml-2" style={{color: "white"}} onClick={close}>
                  &times;
                </a>
                <h2 style={{ textAlign: "center", color: "#e44c65", fontWeight: "bold"}}>Publicity</h2>
                <div class="px-2" style={{color: "white"}}>
                  <br></br>The Publicity team's objective is to update the public about our progress as a team, as well as to educate the community on the best ways to stay safe and help out during this pandemic.
                </div>
                <br></br>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Leads:</span> Kashika Dhanjal, Khushmeet Chandi, Anika Thatavarty, Jennifer Abraham
                </div>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Team:</span> Rhea Goswami, Akila Islam, Angie Huang, Anoushka Sarkar, Brianna Ta, Emma Cheng, Jay Siva, Krithi L. , Reva Hirave, Rhea Tammireddi, Simar N., Vyomika Ghandi
                </div>
                <br></br>
                <div class="w-auto inline-block flex items-center justify-center pb-2">
                  <button
                    className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-pinkDark"
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

          <Popup trigger={
            <div class="cursor-pointer flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..." style={{background: "#304352"}}>
              <img style={{ width: "100%" }} src={dprinting} alt="Mika Naraynsingh" style={{ "width": "100%" }} />
              <p class="center" style={{ textAlign: "center", color: "white"}}>3D Printing</p>
            </div>
          } modal>
            {close => (
              <div className="modal" style={{background: "#304352"}}>
                <a className="close cursor-pointer ml-2" style={{color: "white"}} onClick={close}>
                  &times;
                </a>
                <h2 style={{ textAlign: "center", color: "#e44c65", fontWeight: "bold"}}>3D Printing</h2>
                <div class="px-2" style={{color: "white"}}>
                  <br></br>The 3D Printing team is responsible for the creation, collection, and prototyping of designs for various tools to help aid the COVID-19 relief effort, as well as the eventual mass production of said materials to be distributed to organizations in need.
                </div>
                <br></br>
                <div class="px-2" style={{color: "white"}}>
                <span style={{color: "#e44c65", fontWeight: "bold"}}>Leads:</span> Joshua Lian, Tharun Saravanan
                </div>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Team:</span> Kareem Jaber, Aaryan Dave, Ron Nachum, Daniel Lian
                </div>
                <br></br>
                <div class="w-auto inline-block flex items-center justify-center pb-2">
                  <button
                    className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-pinkDark"
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

        <section className="md:p-16 p-8 flex flex-wrap-reverse">

          <Popup trigger={
            <div class="cursor-pointer flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..." style={{background: "#304352"}}>
              <img style={{ width: "100%" }} src={funds} alt="3D for COVID" />
              <p class="center" style={{ textAlign: "center", color: "white"}}>Funds</p>
            </div>
          } modal>
            {close => (
              <div className="modal" style={{background: "#304352"}}>
                <a className="close cursor-pointer ml-2" style={{color: "white"}} onClick={close}>
                  &times;
                </a>
                <h2 style={{ textAlign: "center", color: "#e44c65", fontWeight: "bold"}}>Funds</h2>
                <div class="px-2" style={{color: "white"}}>
                  <br></br>The Funds team is working to raise money for YCRO and help compensate costs for our volunteers.
                </div>
                <br></br>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Leads:</span> Catie Granum, Vishal Kanigicherla
                </div>
                <br></br>
                <div class="w-auto inline-block flex items-center justify-center pb-2">
                  <button
                    className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-pinkDark"
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

          <Popup trigger={
            <div class="cursor-pointer flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..." style={{background: "#304352"}}>
              <img style={{ width: "100%" }} src={outreach} alt="Fairfax County Public Libraries" />
              <p class="center" style={{ textAlign: "center", color: "white"}}>Outreach</p>
            </div>
          } modal>
            {close => (
              <div className="modal" style={{background: "#304352"}}>
                <a className="close cursor-pointer ml-2" style={{color: "white"}} onClick={close}>
                  &times;
                </a>
                <h2 style={{ textAlign: "center", color: "#e44c65", fontWeight: "bold"}}>Outreach</h2>
                <div class="px-2" style={{color: "white"}}>
                  <br></br>The Outreach team is in charge of all correspondence between facilities in need and the YCRO, managing all requests for materials and keeping track of where supplies need to go for maximum impact.
                </div>
                <br></br>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Leads:</span> Marian Qian and Aryan Joshi
                </div>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Team:</span> Shing Gao, Angie Huang, Sarah Zhang, Jay Siva, Saanjh Khattar
                </div>
                <br></br>
                <div class="w-auto inline-block flex items-center justify-center pb-2">
                  <button
                    className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-pinkDark"
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

          <Popup trigger={
            <div class="cursor-pointer flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..." style={{background: "#304352"}}>
              <img style={{ width: "100%" }} src={tutorials} alt="Lets Breathe" />
              <p class="center" style={{ textAlign: "center", color: "white"}}>Tutorials</p>
            </div>
          } modal>
            {close => (
              <div className="modal" style={{background: "#304352"}}>
                <a className="close cursor-pointer ml-2" style={{color: "white"}} onClick={close}>
                  &times;
                </a>
                <h2 style={{ textAlign: "center", color: "#e44c65", fontWeight: "bold"}}>Tutorials</h2>
                <div class="px-2" style={{color: "white"}}>
                  <br></br>The Tutorials team is in charge of producing quality content to inform volunteers how to assisst in producing PPE at home.
                </div>
                <br></br>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Leads:</span> Marian Qian and Aryan Joshi
                </div>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Team:</span> Shing Gao, Angie Huang, Sarah Zhang, Jay Siva, Saanjh Khattar
                </div>
                <br></br>
                <div class="w-auto inline-block flex items-center justify-center pb-2">
                  <button
                    className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-pinkDark"
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

          <Popup trigger={
            <div class="cursor-pointer flex-1 column w-1/4 mx-8 transition duration-700 ease-in-out box-shadow shadow-2xl opacity hover:opacity-25 transform hover:-translate-y-1 hover:scale-110 ..." style={{background: "#304352"}}>
              <img style={{ width: "100%" }} src={eprinting} alt="Mika Naraynsingh" style={{ "width": "100%" }} />
              <p class="center" style={{ textAlign: "center", color: "white"}}>2D Printing</p>
            </div>
          } modal>
            {close => (
              <div className="modal" style={{background: "#304352"}}>
                <a className="close cursor-pointer ml-2" style={{color: "white"}} onClick={close}>
                  &times;
                </a>
                <h2 style={{ textAlign: "center", color: "#e44c65", fontWeight: "bold"}}>2D Printing</h2>
                <div class="px-2" style={{color: "white"}}>
                  <br></br>The 2D Printing team is designing and producing ear savers to help make masks more comfortable and ensure long term wear.
                </div>
                <br></br>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Leads:</span> Jason Wang and Maanya Shanker
                </div>
                <div class="px-2" style={{color: "white"}}>
                  <span style={{color: "#e44c65", fontWeight: "bold"}}>Team:</span> Marian Qian, Angie Huang, Hashir Aqeel, Taj Abdin, Thomas Lu  
                </div>
                <br></br>
                <div class="w-auto inline-block flex items-center justify-center pb-2">
                  <button
                    className="text-white font-bold py-1 px-4 rounded bg-accent hover:bg-pinkDark"
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
