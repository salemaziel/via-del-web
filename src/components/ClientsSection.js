import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SectionHeader2 from "./SectionHeader2";
import Clients from "./Clients";

import Spotify from '../images/spotify-logo-svg.svg'
import Paypal from '../images/paypal-logo-svg.svg'
import AirBnb from '../images/airbnb-logo.svg'
import Meetup from '../images/meetup-logo.svg'


function ClientsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      
      {/*<Container className="mb-5">
        <Row className="justify-content-center">
          <Col xs={10} md={4}>
        <img src={props.titleImage} alt={props.titleImageAlt} className="w-100" />
        </Col>
        </Row>
  </Container>*/}
      <Container className="text-center">
        <SectionHeader2
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Clients
          items={[
            {
              name: "Meetup",
              image: Meetup,
              width: "135px",
            },
            {
              name: "PayPal",
              image: Paypal,
              width: "135px",
            },
            {
              name: "AirBnb",
              image: AirBnb,
              width: "135px",
            },

            {
              name: "Spotify",
              image: Spotify,
              width: "135px",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default ClientsSection;
