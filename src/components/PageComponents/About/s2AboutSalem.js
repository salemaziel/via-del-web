import React from "react";
import Section from "../../Section";
import Container from "react-bootstrap/Container";
//import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SectionHeader2 from "../../SectionHeader2";
import "./s2AboutSalem.scss";
//import {Link} from 'gatsby'

function AboutSalem(props) {
  
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="items-center align-items-center">
          <Col>
            <figure className="mx-auto HeroSectionTxtBtnRight__image-container">
              <Image src={props.image} fluid={true} /*style={{boxShadow: '10px 10px 10px gray'}}*/ loading="lazy" />
            </figure>
          </Col>
          <Col
            lg={6}
            /*className="mt-5 text-center offset-lg-1 mt-lg-0 text-lg-left"*/
            className="mt-5 text-left mt-lg-0 lg:mt-0 text-lg-left"
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              padding: '3rem 1rem 3rem 1rem',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '5px'
            }}
          >
            <SectionHeader2
              title={props.title}
              subtitle={props.subtitle}
              description={props.description}
              description1={props.description1}
              description2={props.description2}
              description3={props.description3}
              description4={props.description4}
              description5={props.description5}
              description6={props.description6}
              description7={props.description7}
              size={1}
              spaced={true}
              style={{color: 'black!important'}}
              className="px-2"
            />
            {/*<Button as={Link} to={props.link} className="px-5 py-3 btn-lg btn-block">{props.buttonText}</Button>*/}

          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default AboutSalem;
