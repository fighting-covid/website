import SEO from "../../../components/seo";
import React from "react";
import ReactGA from "react-ga";
import paper_ear_saver from "../../../assets/images/make/innovative-design/paperearsaver.jpg";
import card_ear_saver from "../../../assets/images/make/innovative-design/cardearsaver.png";
import face_mask from "../../../assets/images/make/innovative-design/hairtiefacemask.png";

ReactGA.initialize("UA-167321699-1");
ReactGA.pageview("/ppe-make/low-tech-ppe");
const PPEMakeLowTechPPEPage = ({ data }) => {
  return (
    <>
      <SEO title="Low Tech PPE" />
      <main className="container my-12">
        <section className="text-center mb-8">
          <h1 className="heading">Low Tech PPE</h1>
        </section>

        <section className="flex flex-row md:justify-center justify-end mb-8">
          <div className="md:w-2/3 w-full mb-5 md:mb-0 md:pr-3">
            <div
              className="border-2 border-gray-500"
            >
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/ij9wQRHGri0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="md:w-2/3 w-full md:pr-3">
            <div
              className="border-2 border-gray-500 h-full"
            >
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/gJ4aQbABioA"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="flex flex-row md:justify-center justify-end">
          <div className="md:w-2/3 w-full mb-5 md:mb-0 md:pr-3">
            <div
              className="border-2 border-gray-500"
            >
              <img
                src={paper_ear_saver}
                alt="ear saver"
                className="w-full h-full object-cover"
                style={{height: "300px"}}
              />
              <p>The hallmark of the Innovative Design team, origami ear savers are fast, easy, 
                sturdy, cheap, comfortable, and recyclable. With 1 sheet of printer paper and 
                just a few folds, you can create 3 ear savers! These can last for several days, 
                if not weeks or months. They are essential if you plan on wearing a face mask 
                for several hours.</p>
            </div>
          </div>

          <div className="md:w-2/3 w-full mb-5 md:mb-0 md:pr-3">
            <div
              className="border-2 border-gray-500"
            >
              <img
                src={card_ear_saver}
                alt="ear saver"
                className="w-full h-full object-cover"
                style={{height: "300px"}}
              />
              <p>An ear saver may also be made with a credit card, playing card, Pokemon card, 
                or Yu-Gi-Oh card. By cutting multiple notches, you can accommodate multiple 
                sizes in one!</p>
            </div>
          </div>

          <div className="md:w-2/3 w-full mb-5 md:mb-0 md:pr-3">
            <div
              className="border-2 border-gray-500"
            >
              <img
                src={face_mask}
                alt="ear saver"
                className="w-full h-full object-cover"
                style={{height: "300px"}}
              />
              <p>Using a square piece of cloth and two hair ties, you can fashion a face mask 
                for yourself in just 3 easy steps!</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PPEMakeLowTechPPEPage;
