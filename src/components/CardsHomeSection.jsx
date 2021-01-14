import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Cards from "./Cards";

import Step1 from "../images/step1.png"
import Step2 from "../images/step2.png"
import Step3 from "../images/step3.png"

function CardsHomeSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container fluid>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Cards
          items={[
            {
              headerImage: "",
              iconImage: Step1,
              stepNumber: "Step 1",
              stepTitle: "Schedule A Call",
              stepDescription:
                "Get in touch with us! You're only a phone call away from improving your company's exposure.",
              link: "/contact",
              linkText: "Schedule Your Call",
            },
            {
              headerImage: "",
              iconImage: Step2,
              stepNumber: "Step 2",
              stepTitle: "Get Your Plan",
              stepDescription:
                "Browse through all the digital services we have to offer and choose the option that's right for you!",
                link: "/contact",
                linkText: "Get Your Plan",


            },
            {
              headerImage: "",
              iconImage: Step3,
              stepNumber: "Step 3",
              stepTitle: "Win Online",
              stepDescription:
                "Take charge of all search engines and business listings with our all-in-one marketing solutions!",
                link: "/contact",
                linkText: "Start Winning Online",


            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default CardsHomeSection;
