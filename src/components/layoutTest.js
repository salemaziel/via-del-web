/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";

import Header from "./header";
import Footer from './Footer/footer'
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/custom.scss";
import './layout.css'
import '../styles/main.css'

const LayoutTest = ({ children }) => {
  const data = useStaticQuery(graphql`
    query TheSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
       {children}
      <Footer />

    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutTest;
