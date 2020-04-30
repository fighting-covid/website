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
            //url="/assets/stl/face_shield.stl"
            url="https://3dprint.nih.gov/sites/default/files/models/3d_model_files/Prusa_Modified_TensionLocks_0.stl"
            width={400}
            height={400}
            modelColor='#B92C2C'
            backgroundColor='#EAEAEA'
            rotate={true}
            orbitControls={true}
          />
          <Markdown className="markdown-body">
          [Download this file](https://3dprint.nih.gov/sites/default/files/models/3d_model_files/Prusa_Modified_TensionLocks_0.stl)
          </Markdown>
        </section>
      </main>
    </>
  );
};

export default PPEMakePage;
