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
                        <h2 className="text-center font-bold font-serif md:text-5xl text-4xl pb-4 heading">
                            {"Acknowledgments"}
                        </h2>
                    </div>
                    <Markdown className="text-xl markdown-body mb-4 mx-auto text-center">
                        {"We would like to thank everyone who helped us deliver PPE to frontline workers."}
                    </Markdown>
                    <br></br>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <a href="https://3dforcovid.com/" target="_blank">
                        <img src={covid} alt="3D for COVID" />
                    </a>
                    <div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
                        <div>
                            <h2 className="font-serif font-bold md:text-4xl text-3xl heading">
                                3D for COVID
                            </h2>
                        </div>
                        <Markdown className="markdown-body text-lg">
                            {"3D for COVID is a nationwide community of volunteers and independent producers of life-saving PPE for first-responders. Nearly 1500 members strong, the organization is working to produce face shields, complementing our own supply and helping YCRO fulfill requests faster."}
                        </Markdown>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <a href="https://www.fairfaxcounty.gov/library/" target="_blank">
                        <img src={fcpl} alt="Fairfax County Public Libraries" />
                    </a>
                    <div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
                        <div>
                            <h2 className="font-serif font-bold md:text-4xl text-3xl heading">
                                Fairfax County Public Libraries
                            </h2>
                        </div>
                        <Markdown className="markdown-body text-lg">
                            {"While the libraries have been closed, FCPL has sought out opportunities to contribute to the community. Library staff have made many masks for public use, helped assemble face shields, and 3D printed a number of different items for healthcare professionals’ use. We are glad they have chosen to work with Project YCRO to supply needed personal protective equipment. The following library branches have been 3D printing for YCRO: Centreville, John Marshall, Kings Park, Oakton, Pohick, Reston, Richard Byrd, Thomas Jefferson, Tysons-Pimmit and Woodrow Wilson."}
                        </Markdown>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <a href="https://masksfordocs.com" target="_blank">
                        <img src={mfd} alt="Masks for Docs" />
                    </a>
                    <div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
                        <div>
                            <h2 className="font-serif font-bold md:text-4xl text-3xl heading">
                                Masks for Docs
                            </h2>
                        </div>
                        <Markdown className="markdown-body text-lg">
                            {"YCRO has worked with the Northern VA chapter of Masks for Docs to coordinate deliveries of face shields and ear savers to healthcare workers."}
                        </Markdown>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <img src={mn} alt="Mika Naraynsingh" style={{"height" : "50%", "width" : "35%"}}/>
                    <div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
                        <div>
                            <h2 className="font-serif font-bold md:text-4xl text-3xl heading">
                                Mika Naraynsingh
                            </h2>
                        </div>
                        <Markdown className="markdown-body text-lg">
                            {"Ever since Mika Naraynsingh read about the PPE shortages for our frontline workers during COVID-19, she knew she had to help. As an architect at HOK DC, finding solutions came naturally so she fired up her 3D printer and got to work. With the help of her company’s laser cutter and collaborations with great organizations like Project YCRO, she and her husband Arun Ramlakhan have made and donated over 500 face shields to 15 healthcare facilities. They plan to continue helping because they believe in the power and strength of community."}
                        </Markdown>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <a href="https://www.facebook.com/groups/opensourcecovid19medicalsupplies/" target="_blank">
                        <img src={osms} alt="Open Source COVID19 Medical Supplies" />
                    </a>
                    <div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
                        <div>
                            <h2 className="font-serif font-bold md:text-4xl text-3xl heading">
                                Open Source COVID-19 Medical Supplies
                            </h2>
                        </div>
                        <Markdown className="markdown-body text-lg">
                            {"The Open Source COVID-19 Medical Supplies group contains a plethora of information that helped YCRO as it was getting started."}
                        </Markdown>
                    </div>
                </section>

            </main>
        </>
    );
};

export default Acknowledgments;
