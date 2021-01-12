import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader2 from "./SectionHeader2";
import Features2 from "./Features2";

import Design from '../images/undraw_right_places.svg'
import Responsive from '../images/undraw_progressive_app.svg'
import Secure from '../images/undraw_secure_login.svg'
import NoHack from '../images/undraw_hacker_mind.svg'

function FeaturesSectionZigzag(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader2
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Features2
          items={[
            {
              title: "Beautiful and fresh design.",
              description:
                "Impress potential customers from the moment they land on your site.",
              image: Design,
            },
            {
              title: "Responsive to any screen size.",
              description:
                "Websites are specially coded to look great and run smoothly on every device.",
              image: Responsive,
            },
            {
              title: "SSL Certificates with every plan.",
              description:
                "Keep your customers information safe and give them ease of mind with a secure, encrypted connection to your website.",
              image: Secure,
            },
            {
              title: "Safe from hackers.",
              description:
                "Using the latest WebApp technology creates static websites without the need for a backend database, so there's nothing to hack.",
              image: NoHack,
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default FeaturesSectionZigzag;
