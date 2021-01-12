import React from 'react'
import Banner from '../../../../banner'
import SectionTxtBtnRight from '../SectionTxtBtnRight'
//import HeroSectionTxtBtnLeft from '../../../../HeroSectionTxtBtnLeft'
//import PortfolioSection from '../../../../PortfolioSection'
import CardsHomeSection from '../../../../CardsHomeSection'
import {navigateTo} from 'gatsby'
import CtaSectionBgImage from '../../../../CtaSectionBgImage'

import Section1Intro from "../s1Intro"


import Marketing from "../../../../../images/undraw_Marketing.svg"

const DigitalMarketingPage = (props) => {
    return(
        <>
            <Banner />
                  <Section1Intro
                  bg=""
                  textColor="dark"
                  size=""
                  bgImage=""
                  bgImageOpacity={0.8}
                  title="Digital Marketing Services"
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
                    title="SEO, Content Marketing, Social Media Management"
                    subtitle="We offer digital marketing services ranging from on-page and off-page SEO, content marketing, directory listing, social media management, and more."
                    description1=""
                    description2=""
                    description3=""
                    description4=""
                    description5=""
                    description6=""
                    description7=""
                    buttonText="Get Started"
                    buttonColor="primary"
                    image={Marketing}
                    link="/contact"
                    /*buttonOnClick={() => {
                      // Navigate to pricing page
                      navigateTo("/");
                    }}*/
                  />

{/*<HeroSectionTxtBtnLeft
                    bg="white"
                    textColor="dark"
                    size="md"
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
bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600837824/rbl-art-designs/smartphone-1894723_1920_yti9if.jpg"
bgImageOpacity={0.8}
title="Schedule A Consultation"
subtitle=""
buttonText="Get Started"
buttonColor="primary"
buttonOnClick={() => {
// Navigate to pricing page
navigateTo("/about");
}}
/>




        </>
    )
}

export default DigitalMarketingPage