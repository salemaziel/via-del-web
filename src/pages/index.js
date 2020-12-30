
import React from "react";

import LayoutEN from "../components/layout";
import SEO from "../components/seo";

import HomePageEN from '../components/PageComponents/en/Home/HomePageEN'

const IndexPage = () => (
  <LayoutEN>
    <SEO title="Home US_En" />
    <HomePageEN />

  </LayoutEN>
);

export default IndexPage;
