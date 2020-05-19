import Markdown from "react-markdown";
import SEO from "../components/seo";
import React from 'react';
import osms from '../assets/images/osms.jpg';
import fcpl from '../assets/images/fcpl2.jpg';
import covid from '../assets/images/3d.jpg';

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
                    <img src="https://pbs.twimg.com/profile_images/1241511255845683202/dZky2DDL_400x400.jpg" alt="Masks for Docs" />
                    <div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
                        <div>
                            <h2 className="font-serif font-bold md:text-4xl text-3xl heading">
                                Masks for Docs
                            </h2>
                        </div>
                        <Markdown className="markdown-body text-lg">
                            {"They provided face shields."}
                        </Markdown>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <img src={covid}alt="3D for COVID" />
                    <div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
                        <div>
                            <h2 className="font-serif font-bold md:text-4xl text-3xl heading">
                                3D for COVID
                            </h2>
                        </div>
                        <Markdown className="markdown-body text-lg">
                            {"A blurb."}
                        </Markdown>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <img src={osms} alt="Open Source COVID19 Medical Supplies" />
                    <div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
                        <div>
                            <h2 className="font-serif font-bold md:text-4xl text-3xl heading">
                            Open Source COVID19 Medical Supplies
                            </h2>
                        </div>
                        <Markdown className="markdown-body text-lg">
                            {"Blurb 2."}
                        </Markdown>
                    </div>
                </section>
                <section className="md:p-16 p-8 flex flex-wrap-reverse">
                    <img src={fcpl} alt="Fairfax County Public Libraries" />
                    <div className="md:pl-16 py-8 md:w-1/2 w-full flex flex-col md:justify-center justify-end">
                        <div>
                            <h2 className="font-serif font-bold md:text-4xl text-3xl heading">
                            Fairfax County Public Libraries
                            </h2>
                        </div>
                        <Markdown className="markdown-body text-lg">
                            {"Blurb 3."}
                        </Markdown>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Acknowledgments;
