import React from "react";

import LayoutEN from "../components/layout";
import SEO from "../components/seoNew"
import FAQPage from "../components/PageComponents/en/FAQ/FAQPage";

const FAQ = () => (
  <LayoutEN>
    <SEO title="Frequently Asked Questions" />
    <FAQPage />

  </LayoutEN>
);

export default FAQ;
