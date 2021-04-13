import React from 'react'
import Banner from '../../../banner'
import SectionTxtBtnRight from '../SectionTxtBtnRight'
//import HeroSectionTxtBtnLeft from '../../HeroSectionTxtBtnLeft'
import CardsHomeSection from '../../../CardsHomeSection'
import {navigateTo} from 'gatsby'
import CtaSectionBgImage from '../../../CtaSectionBgImage'

import Section1Intro from "../s1Intro"

import Design from "../../../../images/undraw_work_in_progress.svg"
import SmartPhone from "../../../../images/smartphone-1894723_1920_yti9if.jpg"

const GraphicDesignPage = (props) => {
    return(
        <>
            <Banner />
            <Section1Intro
                  bg=""
                  textColor="dark"
                  size=""
                  bgImage=""
                  bgImageOpacity={0.8}
                  title="Graphic Design Services"
                  subtitle=""
                  description1=""
                  description2=""
                  description3=""
                />
            <SectionTxtBtnRight
                    bg="white"
                    textColor="dark"
                    size=""
                    bgImage=""
                    bgImageOpacity={0.8}
                    title="Logos, Graphic Design, &amp; Branding"
                    subtitle="We offer logo and graphic design services for flyers, brochures, business cards, social media graphics, and more via our own in-house graphic designer."
                    description1=""
                    description2=""
                    description3=""
                    description4=""
                    description5=""
                    description6=""
                    description7=""
                    buttonText="Get Started"
                    buttonColor="primary"
                    image={Design}
                    link="/contact"
                    /*buttonOnClick={() => {
                      // Navigate to pricing page
                      navigateTo("/");
                    }}*/
                  />

        {/*<HeroSectionTxtBtnLeft
                    bg="white"
                    textColor="dark"
                    size=""
                    bgImage=""
                    bgImageOpacity={0.8}
                    title="Fully Responsive Design"
                    subtitle="Where there’s a phone, there’s a way. Having a fully responsive website adds elegance to your business and creates compelling user experiences that drive traffic, generate leads and ultimately, increase sales. No need to worry about crazy coding for a separate mobile site, it’s already taken care of."
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
                    }}* /
                  />*/}
                        <CardsHomeSection
              bg=""
              textColor="dark"
              size="md"
              bgImage=""
              bgImageOpacity={1}
              title=""
              subtitle=""
            />

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
navigateTo("/contact");
}}
/>




        </>
    )
}

export default GraphicDesignPage