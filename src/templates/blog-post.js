import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Container from 'react-bootstrap/Container'
import Bio from "../components/bio"
import Layout from "../components/layout"

import SEO from "../components/seoNew"
//import SEO from "../components/seo"
import Banner from '../components/banner'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import {
  FaAngleLeft
} from 'react-icons/fa'


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Banner bgImage="" />
        <Section
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity>
          <Container >
            <Row>
              <Col>
              <Button 
              as={Link}
              to="/blog"
              >
                <FaAngleLeft style={{height: '1.3rem', width: '1.3rem', marginRight: '0.5rem'}}/>
                Back
              </Button>
              </Col>
            </Row>
          <SectionHeader
          title={post.frontmatter.title}
          subtitle={post.frontmatter.author}
          size={2}
          spaced={true}
          className="text-center"
        />
        <p
          style={{
            display: `block`,
            marginBottom: '2rem',
            marginTop: '0',
            textAlign: 'left'
          }}
        >
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: '2rem',
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        </Container>
        </Section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
