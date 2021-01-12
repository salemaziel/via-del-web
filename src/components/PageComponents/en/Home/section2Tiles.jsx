import React from "react";

import sectiontileStyles from "./home.module.css";

import Tiles from "./tiles";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";

const SectionTiles = (props) => {
  return (
    <>
      <section className={sectiontileStyles.sectionTiles}>
        <Container fluid>
          <div className="inner">
            <Fade top cascade>
              <header>
                <h1 className="text-center">{props.title1}</h1>
                <h1> {props.title2}</h1>
                <div className={sectiontileStyles.subBox}>
                <h2 className={sectiontileStyles.subdescription}>{props.subdescription}
                <br />
                <br />
                {props.subdescription2}
                </h2>
                </div>
              </header>
            </Fade>
            <Tiles
              items={[
                {
                  imgSrc:
                    "https://res.cloudinary.com/dexdumfqy/image/upload/v1600837299/rbl-art-designs/create-a-website_npy4v8.png",
                  imgAlt: "image",
                  link: "/services/website-design",
                  title: "Build A Website",
                  description:
                    "",
                  style: "1",
                },
                {
                  imgSrc:
                    "https://res.cloudinary.com/dexdumfqy/image/upload/v1600849775/rbl-art-designs/consultation-1281-square_rh27uu.jpg",
                  imgAlt: "image",
                  link: "/services/digital-marketing",
                  title: "Market Your Business Online",
                  description:
                    "",
                  style: "2",
                },

                {
                  imgSrc:
                    "https://res.cloudinary.com/dexdumfqy/image/upload/v1600837492/rbl-art-designs/laptop-3174729_1200-square_luhksj.jpg",
                  imgAlt: "image",
                  link: "/services/web-automation",
                  title: "Automate Your Online Workflow",
                  description:
                    "",
                  style: "3",
                },

              ]}
            />

        
          </div>
        </Container>
      </section>
    </>
  );
};

export default SectionTiles;
