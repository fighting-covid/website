import Markdown from "react-markdown";
import SEO from "../components/seo";
import React from 'react';
import osms from '../assets/images/osms.jpg';
import fcpl from '../assets/images/fcpl2.jpg';
import covid from '../assets/images/3d.jpg';
import mfd from '../assets/images/mfd.jpg'
import mn from '../assets/images/mn.jpg'
import donate from '../assets/images/donation.jpeg';
import breathe from '../assets/images/breathe.jpg';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-167321699-1');
ReactGA.pageview('/acknowledgments');


const Acknowledgments = ({ data }) => {
    return (
        <>
            <SEO title="Acknowledgments" />
            <main>
                <section className="md:mb-16 relative p-8 md:p-64">
                    <img
                        className="w-full h-full bg-local object-cover bg-no-repeat bg-center absolute inset-0"
                        src={donate}
                        style={{ objectPosition: "50% 60%", filter: "grayscale(0)" }}>
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

                <section className="p-8">
                    <div className="flex justify-center">
                        <h2 className="font-mono md:text-4xl text-3xl" style={{ color: "#304352" }}>
                            Acknowledgments
                        </h2>
                    </div>
                    <Markdown className="text-xl markdown-body mb-4 mx-auto text-center">
                        {"We would like to thank everyone who helped us deliver PPE to frontline workers."}
                    </Markdown>
                    <br></br>
                </section>

                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <div class="flex-1 column w-1/4 px-3 mx-16 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ...">
                        <img style={{ width: "100%" }} src={covid} alt="3D for COVID" />
                        <p class="center" style={{ textAlign: "center" }}><a href="https://3dforcovid.com/" target="_blank"><u>3D for COVID</u></a></p>
                    </div>
                    <div class="flex-1 column w-1/4 px-3 mx-16 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ...">
                        <img style={{ width: "100%" }} src={fcpl} alt="Fairfax County Public Libraries" />
                        <p class="center" style={{ textAlign: "center" }}><a href="https://www.fairfaxcounty.gov/library/" target="_blank"><u>FCPL</u></a></p>
                    </div>
                    <div class="flex-1 column w-1/4 px-3 mx-16 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ...">
                        <img style={{ width: "100%" }} src={breathe} alt="Lets Breathe" />
                        <p class="center" style={{ textAlign: "center" }}><a href="https://www.gofundme.com/f/gofundmecomfmasks-for-healthcare-heroes" target="_blank"><u>Lets Breathe</u></a></p>
                    </div>
                </section>

                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <div class="flex-1 column w-1/4 px-3 mx-16 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ...">
                        <img src={mn} alt="Mika Naraynsingh" style={{ "width": "100%" }} />
                        <p class="center" style={{ textAlign: "center" }}>Mika Naraynsingh</p>
                    </div>
                    <div class="flex-1 column w-1/4 px-3 mx-16 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ...">
                        <img style={{ width: "100%" }} src={osms} alt="Open Source COVID19 Medical Supplies" />
                        <p class="center" style={{ textAlign: "center" }}><a href="https://opensourcemedicalsupplies.org/" target="_blank"><u>Open Source Medical Supplies</u></a></p>
                    </div>
                    <div class="flex-1 column w-1/4 px-3 mx-16 transition duration-500 ease-in-out box-shadow shadow-2xl transform hover:-translate-y-1 hover:scale-110 ...">
                        <img style={{ width: "100%" }} src={mfd} alt="Masks for Docs" />
                        <p class="center" style={{ textAlign: "center" }}><a href="https://masksfordocs.com" target="_blank"><u>Masks for Docs</u></a></p>
                    </div>
                </section>

            </main>
        </>
    );
};

export default Acknowledgments;
