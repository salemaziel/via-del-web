
import React from "react";

import LayoutEN from "../components/layout";
//import SEO from "../components/seoNew"
import HomePageEN from '../components/PageComponents/Home/HomePageEN'

import { GatsbySeo } from "gatsby-plugin-next-seo"

const IndexPage = () => (
  <LayoutEN>
    <GatsbySeo title="San Diego based Website Design &amp; Digital Marketing" />
    <HomePageEN />

  </LayoutEN>
);

export default IndexPage;
