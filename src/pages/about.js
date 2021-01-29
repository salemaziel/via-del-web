import React from "react";

import LayoutEN from "../components/layout";
import SEO from "../components/seoNew"
import AboutPageEN from '../components/PageComponents/en/About/AboutPage'

const AboutPage = () => (
  <LayoutEN>
    <SEO title="About Via Del Web" />
    <AboutPageEN />

  </LayoutEN>
);

export default AboutPage;
