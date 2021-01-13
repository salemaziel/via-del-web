import React from "react";

import sectiontileStyles from "./home.module.css";

import Tiles from "./tiles";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";

import { Consultation, CreateAWebsite, TechSolutions } from "../../../../images/index"


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
                <Container>
                <div className={sectiontileStyles.subBox}>
                <h2 className={sectiontileStyles.subdescription}>{props.subdescription}
                <br />
                <br />
                {props.subdescription2}
                </h2>
                </div>
                </Container>
              </header>
            </Fade>
            <Tiles
              items={[
                {
                  imgSrc: CreateAWebsite,
                  imgAlt: "image",
                  link: "/services/website-design",
                  title: "Build Your Website",
                  description:
                    "Construye su pagina web",
                  style: "1",
                },
                {
                  imgSrc: Consultation,
                  imgAlt: "image",
                  link: "/services/digital-marketing",
                  title: "Market Your Business Online",
                  description:
                    "",
                  style: "2",
                },

                {
                  imgSrc: TechSolutions,
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
