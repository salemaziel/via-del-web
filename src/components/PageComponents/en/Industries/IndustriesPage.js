import React from "react"
import Banner from "../../../banner";
import Section1Intro from "./s1Intro"
import S2IndustriesCards from "./s2IndustriesCards"
import S1Hero from  "../Services/WebsiteDesign/s1Hero"


const IndustriesPage = (props) => {
    return(
        <>
<Banner bgImage="" />

<Section1Intro
        bg=""
        textColor="dark"
        size=""
        bgImage=""
        bgImageOpacity={0.8}
        title="Industries We Work With"
        subtitle=""
        description1=""
        description2=""
        description3=""
      />

<S2IndustriesCards />


        </>
    )
}

export default IndustriesPage