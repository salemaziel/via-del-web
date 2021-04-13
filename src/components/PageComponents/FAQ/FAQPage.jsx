import React from 'react'

import FaqAccordianSection from '../About/FaqAccordianSection'

import Banner from '../../banner'

const FAQPage = (props) => {
    return(
<>
<Banner
bgImage="" />

<FaqAccordianSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
      />

</>
    )
}

export default FAQPage