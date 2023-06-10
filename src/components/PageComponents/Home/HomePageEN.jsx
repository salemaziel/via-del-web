import React from "react"

import SectionTiles from "./section2Tiles"
import FeaturesSectionZigzag from "../../FeaturesSectionZigzag"
import CtaSectionBgImage from "../../CtaSectionBgImage"

import CardsHomeSection from "../../CardsHomeSection"
import HeroSectionTxtBtnRight from "../../HeroSectionTxtBtnRight"

import Fade from "react-reveal/Fade"
import { navigate } from "gatsby"
import SectionWavesEN from "./SectionWavesEN"

import ClientsSection from "../../ClientsSection"

import YourCode from "../../../images/undraw_proud_coder.svg"

import CircleDots from "../../../images/circle-dots-background.svg"
import SmartPhone from "../../../images/smartphone-1894723_1920_yti9if.jpg"

import PricingCards from "./PricingCards"


const HomepageEN = props => {
  return (
    <>
      <SectionWavesEN
        headline="Empowering Small Businesses with Custom Web Solutions | Via Del Web."
        headline2=""
        /*subtitle="Ya Tú Sabes."*/
        subtitle="Your Bilingual Web Design and Cloud Technology Partner in San Diego"
        service1=""
        service2=""
        service3=""
        service4=""
      />
      {/*<SectionHero
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600594974/rbl-art-designs/sunset-1509132_pajczh.jpg"
        headline="Bienvenidos"
        subtitle="¿Cómo podemos ayudar te hoy?"
      />*/}
      <SectionTiles
        title1="San Diego-based Website Design ● Web Development ● Digital Solutions"
        title2=""
        /*subdescription="Via Del Web is a San Diego-based Marketing &amp; Technology company specializing in helping local small businesses successfully expand into the digital world. At Via Del Web, we believe in empowering businesses, not just building websites. We start by understanding your unique story and mission. Then, we use our digital expertise to create a platform that amplifies your voice and accelerates your business."*/
        subdescription="Welcome to Via Del Web, where we empower small businesses to thrive in the digital world. We're more than just a web design agency - we're your partners in digital growth. With our unique blend of technological expertise and cloud solutions, we help you create and use your online digital real estate to better connect with your audience, drive your business forward, and expand your company's possibilities."
        subdescription2="Born and raised in Escondido, we are California natives to the core. Hablamos Inglés, Español y somos especialmente afluente en Spanglish."
      />
      
    
      <Fade top>
        <HeroSectionTxtBtnRight
          bg=""
          textColor="dark"
          size="sm"
          bgImage=""
          bgImageOpacity={0.8}
          title="Own Everything About Your Website."
          subtitle="Stop renting websites from other companies that want to keep charging you without ever giving you owernship. Your company's presence online is important, and that fact is becoming more true every day. That's why we at Via Del Web have a simple philosophy around what we build: Your business, your website, your code."
          description1=""
          description2=""
          description3=""
          description4=""
          description5=""
          description6=""
          description7=""
          buttonText="Learn More"
          buttonColor="primary"
          image={YourCode}
          link="/about#ownyourwebsite"
          /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
        />
      </Fade>
      <FeaturesSectionZigzag
        bg=""
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Our Websites Are Coded Entirely From The Ground Up."
        /*subtitle="Other agencies use clunky web building tools to glue pieces together, without any idea how the code actually works. We write each line of code ourselves to get the best performance on your site, which helps keep more customers and bring your company more business."*/
        subtitle="Unlike other agencies that rely on pre-made templates, we build your website from the ground up. We write each line of code ourselves, ensuring optimal performance, customization, and security."
      />
      <div
        style={{
          backgroundImage:`url(${CircleDots})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <ClientsSection
          bg=""
          textColor="dark"
          size=""
          bgImage=""
          bgImageOpacity={1}
          title="Built Like The Best"
          subtitle="We build your website using GatsbyJS, a React Javascript framework trusted by:"
          titleImage=""
          titleImageAlt=""
        />
      </div>

      <PricingCards />

      <Fade top>
        <CardsHomeSection
          bg=""
          textColor="dark"
          size="sm"
          bgImage=""
          bgImageOpacity={1}
          title="Let's Get Started."
          subtitle=""
        />
      </Fade>

      {/*<FeaturesSectionPic3List
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      />*/}
      {/*<PricingCardsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Pricing"
        subtitle="Choose the plan that makes sense for you. All plans include a 14-day free trial."
      />*/}
      <CtaSectionBgImage
        bg="dark"
        textColor="white"
        size="sm"
        bgImage={SmartPhone}
        bgImageOpacity={0.8}
        title="Schedule A Consultation"
        subtitle=""
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          navigate("/contact")
        }}
      />
    </>
  )
}
export default HomepageEN
