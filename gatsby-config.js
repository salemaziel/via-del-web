//const config = require("./config");
const config = require('./config/site');


module.exports = {
  siteMetadata: {
    title: `Via Del Web Website Design & Digital Marketing`,
    description: `Digital Marketing and Website Design`,
    author: `@salemaziel`,
    siteUrl: `https://viadelweb.com`,
    social: {
      twitter: `salemamb760`,
    },
    ...config,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
      {
        resolve: `gatsby-plugin-react-helmet`,
      },
      {
        resolve: `gatsby-plugin-sass`,
      },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "blog",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
          {
            allMdx {
              nodes {
                id
                fields { slug }
                excerpt
                rawBody
                frontmatter {
                  title
                  description
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "rawBody"],
        store: ["id", "slug", "date", "title", "excerpt", "description"],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            slug: node.fields.slug,
            rawBody: node.rawBody,
            excerpt: node.excerpt,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            date: node.frontmatter.date,
          })),
      },
    },
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.viadelweb.com',
        sitemap: 'https://www.viadelweb.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet-async`,
    },
    {
      resolve: `gatsby-plugin-next-seo`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Via Del Web Digital Marketing`,
        short_name: `Via Del Web`,
        start_url: `/`,
        background_color: `#2579bc`,
        theme_color: `#2579bc`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
//    {
//      resolve: `gatsby-plugin-offline`,
//    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
  ],
}
