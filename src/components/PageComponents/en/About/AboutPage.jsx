import React from "react";

import Banner from "../../../banner";
import FaqSimpleSection from "../../../FaqSimpleSection";
import SectionIntro from "./s1Intro"
import CardsWBgSection from "../../../CardsWBgSection";
import CtaSectionBgImage from '../../../CtaSectionBgImage'
import {navigateTo, Link} from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutSalem from "./s2AboutSalem"

import MeStripedShirt from "../../../../images/me-striped-shirt-585x780.jpg"
import CircleDots from "../../../../images/circle-dots-background.svg"
import SmartPhone from "../../../../images/smartphone-1894723_1920_yti9if.jpg"

import Section3OwnCode from './s3OwnCode'

const AboutPageEN = (props) => {
  return (
    <>
      <Banner bgImage="" />
      
      <SectionIntro
        bg=""
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={0.8}
        title="About Via Del Web"
        subtitle=""
        description1="Starting with only one customer, we have blossomed into a full-service digital marketing agency. Although we have grown exponentially and expanded significantly over the last several years, we're stuck to the same core values that helped us cater to our customers' needs from day one."
        description2="We strive to provide effective marketing strategies to companies that range in a variety of size and industry. Regardless of your business, there's always room for marketing services. Allow us to surge the presence of your brand through web design, SEO, and ad campaigns. We offer proven digital marketing solutions, and we'll continue to do so, so get started today!"
        description3=""
      />
      

<div style={{backgroundImage: `url(${CircleDots})`, backgroundRepeat: 'no-repeat'}} >

        <AboutSalem
          bg=""
          textColor="dark"
          size="sm"
          bgImage=""
          bgImageOpacity={0.8}
          title=""
          subtitle=""
          description1="My name is Salem, I am the owner and head developer of Via Del Web. I first got started with web development in 2014, building basic websites as class assignments while studying at the University of California, Santa Barbara. "
          description2="Beginning in 2017, I've done web design and website development both as a freelancer and as part of a fantastic team and agency by the name CodeStaff. At the start of 2020, CodeStaff began pivoting to build a freelancing platform. I continued to work alongside them, but began thinking of starting my own agency."
          description3="Then COVID-19 started, and lots of things got thrown into the air at the point. To play it safe, I continued simply doing freelance work for clients I had already worked with around the country."
          description4="As time went on and COVID-19 continued to spread with no end in sight, I realized that many small businesses we're not prepared with an online-focused business model, and we're hurting because of it. That was when I decided to begin laying the foundation to build my own web agency with a focus on local, small businesses."
          description5=""
          description6=""
          description7=""
          image={MeStripedShirt}
          /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
        />
        </div>
        {/*<Container>
        <Row>
          <Col />
          <Col>
  <div style={{backgroundImage: 'url(https://res.cloudinary.com/dexdumfqy/image/upload/v1600848134/rbl-art-designs/circle-dots-background_npogwh.svg)', backgroundRepeat: 'no-repeat', height: '500px', width: "100%", maxWidth: "100vw", position: "absolute"}} > </div>
  </Col>
  </Row>
  </Container>*/}
      <Container>
        <Row className="justify-content-center mt-3 mb-5">
        <Col xs={10} lg={4}>
            <Button as={Link} to="/contact" className="py-3 px-4 btn-block btn-lg">Schedule A Call</Button>
          </Col>
        </Row>
      </Container>
    <div id="ownyoursite" />
      <Section3OwnCode
        
        bg=""
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={0.8}
        title="Our Approach To Website Ownership"
        subtitle=""
        description1="Owning your business assets is important. Renting from other companies means placing trust in those companies to have your best interests in mind, even when making their own business decisions. Unfortunately, this isn't always the case, and every day small businesses are affected when solutions they rely on suddenly disappear, taking everything down with them."
        description2="While it's true that there are big company website building platforms like Wix and Squarespace that are not likely to disappear overnight, but that doesn't mean depending on them is a great idea. They charge you monthly, and their prices may seem great at first; but in the long run, they will end up costing you more. Your company website is something you are always going to need, and after some time, those reasonable sounding costs will start to add up; meanwhile, you are no closer to actually owning your website than you were when you started."
        description3="At Via Del Web, we want you to own your company's online presence. That's why we code everything from scratch, and give you the code to your website along with detailed instructions on how to get yourself back online, on your own if necessary, in the fastest, simplest, and most efficient way possible."
      />


      <div style={{backgroundImage: `url(${CircleDots})`}} >
      <CardsWBgSection
        bg=""
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      </div>

      <FaqSimpleSection
        bg=""
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Preguntas Frecuentes"
        subtitle=""
      />
            <CtaSectionBgImage
        bg="dark"
        textColor="white"
        size="sm"
        bgImage={SmartPhone}
        bgImageOpacity={0.8}
        title="Schedule A Call"
        subtitle=""
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/contact");
        }}
      />
    </>
  );
};

export default AboutPageEN;
