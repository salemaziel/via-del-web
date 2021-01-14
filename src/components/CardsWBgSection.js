import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios2 from "./TeamBios2";

import DaeSquare from "../images/dae-square.jpg"
import SalemCrop from "../images/salem-crop.jpg"

import Camera from "../images/camera-2598507_480x320.jpg"
import Terminal from "../images/terminal-2-640x287_kncwse.jpg"
import DigMarketing from "../images/digital-marketing-1433427_480x320.jpg"
import UrielSquare from "../images/avatar-large-square-300x300.jpg"

function CardsWBgSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <TeamBios2
          items={[
            {
              headerImage: Terminal,
              avatarImage: SalemCrop,
              name: "Salem Aziel",
              role: "Web & App Development, Digital Consultant, Project Management",
              bio:
                "",
            },
            {
              headerImage: Camera,
              avatarImage: DaeSquare,
              name: "DaeHyun Yoo",
              role: "Graphic Design, Photography, Videography",
              bio:
                "",
            },
            {
              headerImage: DigMarketing,
              avatarImage: UrielSquare,
              name: "Uriel Aguilar",
              role: "Digital Consultant, Project Management, Communications",
              bio:
                "",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default CardsWBgSection;
