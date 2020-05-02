import Markdown from "react-markdown";
import SEO from "../components/seo";
import React from 'react'


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
          <div className="modelo-wrapper"> <div style={{marginBottom: '0%', width: '75%', height: '75%', paddingBottom: '56.25%', position: 'relative'}}> <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}> <iframe src="https://app.modelo.io/embedded/7cMeZX4vg9?viewport=true&autoplay=true" style={{width: '75%', height: '75%'}} frameBorder={0}  /> </div> </div> </div>
          <Markdown className="markdown-body">
          [__Download this file__](https://3dprint.nih.gov/sites/default/files/models/3d_model_files/Prusa_Modified_TensionLocks_0.stl)
          </Markdown>
          <br></br>
          <h3 className="font-serif text-3xl font-bold mb-2">
            {"Face Mask Buckle"}
          </h3>
          <div className="modelo-wrapper"> <div style={{width: '75%', height: '75%', paddingBottom: '56.25%', position: 'relative'}}> <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}> <iframe src="https://app.modelo.io/embedded/set6PDgN2t?viewport=true&autoplay=true" style={{width: '75%', height: '75%'}} frameBorder={0} /> </div> </div> </div>
          <Markdown className="markdown-body">
          [__Download this file__](https://pinshape.com/items/64222-3d-printed-face-mask-comfort-buckle)
          </Markdown>
        </section>
      </main>
    </>
  );
};

export default PPEMakePage;
