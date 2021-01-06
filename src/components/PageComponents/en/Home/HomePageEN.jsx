import React from "react"

import SectionHero from "./section1Hero"
import SectionTiles from "./section2Tiles"
import SectionThree from "./sectionThree"
import FeaturesSectionZigzag from "../../../FeaturesSectionZigzag"
import FeaturesSectionPic3List from "../../../FeaturesSectionPic3List.js"
import CtaSectionBgImage from "../../../CtaSectionBgImage"

import PricingCardsSection from "../../../PricingCardsSection"
import CardsHomeSection from "../../../CardsHomeSection"
import HeroSectionTxtBtnRight from "../../../HeroSectionTxtBtnRight"
import { Helmet } from "react-helmet"

import Fade from "react-reveal/Fade"
import { navigateTo } from "gatsby"
import SectionWavesEN from "../../../SectionWavesEN"

import ClientsSection from "../../../ClientsSection"

import Gatsby from "../../../../images/undraw_gatsbyjs.svg"

const HomepageEN = props => {
  return (
    <>
      <SectionWavesEN
        headline="We build websites for small businesses in Southern Califas."
        headline2=""
        subtitle="Ya Tú Sabes."
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
        title1="Website Design ● Web Development ● Digital Marketing"
        title2=""
        subdescription="Via Del Web is a San Diego based web design company and digital
        marketing partner. We specialize in helping local small businesses expand into the digital world and helping them succeed. Born and raised in Escondido, we are California natives to the core. Hablamos Inglés, Español y estamos especialmente fluido en Spanglish."
      />
      <FeaturesSectionZigzag
        bg=""
        textColor="dark"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="Our Websites Are Coded Entirely From The Ground Up."
        subtitle="Other agencies use clunky web building tools to glue pieces together, without any idea how the code actually works. We write each line of code ourselves, and you get the benefits."
      />
 <div style={{backgroundImage: 'url(https://res.cloudinary.com/dexdumfqy/image/upload/v1600848134/rbl-art-designs/circle-dots-background_npogwh.svg)', backgroundRepeat: 'no-repeat'}} >
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

      <Fade top>
        <HeroSectionTxtBtnRight
          bg=""
          textColor="dark"
          size="sm"
          bgImage=""
          bgImageOpacity={0.8}
          title="Get Online"
          subtitle="Our digital marketing agency can assist you with all your marketing needs. All the way from search engine optimization campaigns, to customized PPC campaigns and even website design solutions."
          description1=""
          description2=""
          description3=""
          description4=""
          description5=""
          description6=""
          description7=""
          buttonText="Get Started"
          buttonColor="primary"
          image="https://res.cloudinary.com/dexdumfqy/image/upload/v1600836618/rbl-art-designs/digital-marketing-1433427_1920_ikotj9.jpg"
          link="/contact"
          /*buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/");
        }}*/
        />
      </Fade>



      {/*<Fade top>
        <CardsHomeSection
          bg=""
          textColor="dark"
          size="sm"
          bgImage=""
          bgImageOpacity={1}
          title="The Game Plan"
          subtitle=""
        />
      </Fade>*/}

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
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600837824/rbl-art-designs/smartphone-1894723_1920_yti9if.jpg"
        bgImageOpacity={0.8}
        title="Schedule A Consultation"
        subtitle=""
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          navigateTo("/about")
        }}
      />
    </>
  )
}
export default HomepageEN
