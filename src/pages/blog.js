import React from "react"
import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seoNew"
//import Button from "../components/button"
import Button from 'react-bootstrap/Button'
import SearchPosts from "../components/searchPosts"
import Container from 'react-bootstrap/Container'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'

import Banner from '../components/banner'

//import blogStyles from '../templates/blog.module.css'

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Banner bgImage="" />
        <Section
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity>
          <Container fluid className="p-0 md:py-0 md:px-12">
          <SectionHeader
          title="Blog / Recent Posts"
          subtitle=""
          size={2}
          spaced={true}
          className="text-center"
        />
        {/*<Bio />*/}
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
          <Button as={Link} to="/" marginTop="85px">Go Home</Button>
        </Container>
        </Section>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 538, quality: 90) {
                  base64
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
