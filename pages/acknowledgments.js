import Markdown from "react-markdown";
import SEO from "../components/seo";
import React from 'react'


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
            </main>
        </>
    );
};

export default Acknowledgments;
