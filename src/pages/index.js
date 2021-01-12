
import React from "react";

import LayoutEN from "../components/layout";
import SEO from "../components/seoNew"
import HomePageEN from '../components/PageComponents/en/Home/HomePageEN'

const IndexPage = () => (
  <LayoutEN>
    <SEO title="Via Del Web" description="Web Design, Web Development, &amp; Digital Marketing Para La Raza" />
    <HomePageEN />

  </LayoutEN>
);

export default IndexPage;
