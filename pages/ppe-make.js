import Markdown from "react-markdown";
import SEO from "../components/seo";
import React from 'react'
import STLViewer from 'stl-viewer'


const PPEMakePage = ({ data }) => {
  return (
    <>
      <SEO title="Make PPE" />
      <main className="container mx-auto">
        <section className="p-8">
          <div className="flex justify-center">
            <h2 className="text-center font-bold font-serif md:text-5xl text-4xl pb-4 heading">
              {"Make PPE at Home"}
            </h2>
          </div>
          <Markdown className="text-xl markdown-body mb-4 mx-auto text-center">
            {"Help medical professionals fight COVID-19 by 3D-printing PPE at home."}
          </Markdown>
          <br></br>
          <h3 className="font-serif text-3xl font-bold mb-2">
            {"Face Shield"}
          </h3>
          <STLViewer
            url="../assets/stl/face_shield.stl"
            width={400}
            height={400}
            modelColor='#B92C2C'
            backgroundColor='#EAEAEA'
            rotate={true}
            orbitControls={true}
          />
          <Markdown className="markdown-body">
          [Download](https://media.prusaprinters.org/media/prints/25857/stls/270587_b59f75d0-4b8a-4999-8417-e5e75874ff98/covid19_headband_rc3.stl#_ga=2.218821466.21577498.1588191792-1277063434.1588191792)
          </Markdown>
        </section>
      </main>
    </>
  );
};

export default PPEMakePage;