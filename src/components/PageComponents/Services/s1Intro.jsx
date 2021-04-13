import React from "react";

import Section from "../../Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader2 from "../../SectionHeader2";

const SectionIntro = (props) => {
  return (
    <>
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <Container className="mt-4 mb-0 text-center">
          <Row className="items-center justify-center justify-content-center align-items-center">
            <Col /*xs={12}* / md="auto" */ className="px-1 py-1">
              <SectionHeader2
                title={props.title}
                subtitle={props.subtitle}
                description1={props.description1}
                description2={props.description2}
                size={1}
                spaced={false}
                className="px-2"
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default SectionIntro;
