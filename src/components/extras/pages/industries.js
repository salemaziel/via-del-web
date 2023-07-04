
import React from "react";

import LayoutEN from "../components/layout";
//import SEO from "../components/seoNew"
import IndustriesPage from '../components/PageComponents/Industries/IndustriesPage'

import { GatsbySeo } from "gatsby-plugin-next-seo"

const Industries = () => (
  <LayoutEN>
    <GatsbySeo title="Industries We Work With" />
    <IndustriesPage />

  </LayoutEN>
);

export default Industries;
