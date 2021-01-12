/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//import styled from "styled-components"
import Container from 'react-bootstrap/Container'



function BioNew() {
  return (
    <StaticQuery
      query={bioNewQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Container className="d-flex justify-content-center">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: 'auto',
                marginBottom: '2rem',
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong>.
              {` `}

            </p>
          </Container>
        )
      }}
    />
  )
}

const bioNewQuery = graphql`
  query BioNewQuery {
    avatar: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`


export default BioNew
