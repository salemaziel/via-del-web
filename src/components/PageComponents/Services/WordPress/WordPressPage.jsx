import React from "react"
import Banner from "../../../banner"
import Section1Intro from "../s1Intro"
import SectionTxtBtnRight from "../SectionTxtBtnRight"




const WPHostingPage = (props) => {
    return(
        <>
              <Banner />
              <Section1Intro
        bg=""
        textColor="dark"
        size=""
        bgImage=""
        bgImageOpacity={0.8}
        title="WordPress"
        subtitle="Hosting, Management, Development, Optimiziation &amp; Migration"
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
        title="Websites Done Right."
        subtitle=""
        description1="Appealing and innovative website design helps you get an edge over your competitors and connect your target audiences across the world."
        description2="Our designer keeps your brand and business operations in mind to ensure that everything is catered properly! "
        description3="Everything will be prepared according to your specifications to give you a different online presence and contribute to your business’ growth."
        description4=""
        description5=""
        description6=""
        description7=""
        buttonText="Get Started"
        buttonColor="primary"
        image=""
        link="/contact"
        /*buttonOnClick={() => {
                      // Navigate to pricing page
                      navigateTo("/");
                    }}*/
      />


        </>
    )
}

export default WPHostingPage