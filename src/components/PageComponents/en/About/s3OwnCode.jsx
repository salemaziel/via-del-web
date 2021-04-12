import React from "react";

import Section from "../../../Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader2 from "../../../SectionHeader2";

const Section3OwnCode = (props) => {
  return (
    <>
      <Section
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={props.bgImage}
        bgImageOpacity={props.bgImageOpacity}
      >
        <Container className="text-left mb-2 mt-4">
          <Row className="justify-content-center justify-center iters-center align-items-center">
            <Col /*xs={12}* / md="auto" */ className="py-3 px-1">
              <SectionHeader2
                title={props.title}
                subtitle={props.subtitle}
                description1={props.description1}
                description2={props.description2}
                description3={props.description3}
                description4={props.description4}
                description5={props.description5}
                description6={props.description6}
                description7={props.description7}
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

export default Section3OwnCode;
