import Markdown from "react-markdown";
import SEO from "../components/seo";
import React from 'react';
import osms from '../assets/images/osms.jpg';
import fcpl from '../assets/images/fcpl2.jpg';
import covid from '../assets/images/3d.jpg';
import mfd from '../assets/images/mfd.jpg'
import mn from '../assets/images/mn.jpg'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-167321699-1');
ReactGA.pageview('/acknowledgments');


const Acknowledgments = ({ data }) => {
    return (
        <>
            <SEO title="Acknowledgments" />
            <main className="container mx-auto">
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
                    <div class="column">
                        <img style={{ width: "400px" }} src={covid} alt="3D for COVID" />
                        <p class="center" style={{ textAlign: "center" }}><a href="https://3dforcovid.com/" target="_blank"><u>3D for COVID</u></a></p>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <div class="column">
                        <img style={{ width: "400px" }} src={fcpl} alt="Fairfax County Public Libraries" />
                        <p class="center" style={{ textAlign: "center" }}><a href="https://www.fairfaxcounty.gov/library/" target="_blank"><u>FCPL</u></a></p>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <div class="column">
                        <img style={{ width: "400px" }} src={mfd} alt="Masks for Docs" />
                        <p class="center" style={{ textAlign: "center" }}><a href="https://masksfordocs.com" target="_blank"><u>Masks for Docs</u></a></p>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <div class="column">
                        <img src={mn} alt="Mika Naraynsingh" style={{ "height": "100%", "width": "400px" }} />
                        <p class="center" style={{ textAlign: "center" }}>Mika Naraynsingh</p>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <div class="column">
                        <img style={{ width: "400px" }} src={osms} alt="Open Source COVID19 Medical Supplies" />
                        <p class="center" style={{ textAlign: "center" }}><a href="https://opensourcemedicalsupplies.org/" target="_blank"><u>Open Source Medical Supplies</u></a></p>
                    </div>
                </section>

            </main>
        </>
    );
};

export default Acknowledgments;
