//const config = require("./config");
const config = require('./config/site');
//const tailwindcss = require('tailwindcss');
//const autoprefixer = require('autoprefixer');


module.exports = {
  siteMetadata: {
    title: `Via Del Web Website Design + Development & Digital Marketing`,
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
//        options: {
//          postCssPlugins: [
//            require("tailwindcss"),
//            require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
//          ],
//        },
      },
      {
          resolve: `gatsby-plugin-advanced-sitemap`,
      },
      {
        resolve: `gatsby-plugin-postcss`,

        },
//      {
//        resolve: `gatsby-plugin-canonical-urls`,
//      },
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
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-187979754-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        //pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "OPT-W2BVMC3",
        // Enables Google Optimize Experiment ID
//        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
//        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        //defer: false,
        // Any additional optional fields
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        cookieDomain: "viadelweb.com",
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://viadelweb.com',
        sitemap: 'https://viadelweb.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet-async`,
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        titleTemplate: 'Via Del Web | %s',
        description: 'Latino Owned Web Design, Web Development, & Digital Marketing Agency based in San Diego, CA specializing in working with small businesses.',
        language: 'en',
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://viadelweb.com',
          site_name: 'Via Del Web',
          images: [
            {
              url: 'https://viadelweb.com/logo/logo.png',
              alt: 'Via Del Web Logo',
            }
          ]
        },
        twitter: {
          handle: '@viadelweb',
          site: '@site',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: `gatsby-plugin-mailgo`,
      options: {
        mailgoConfig: {
          dark: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-mautic`,
      options: {
        // The URL where mautic is installed
        hostUrl: "https://marketing.viadelweb.agency",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Via Del Web Web Design+Development & Digital Marketing`,
        short_name: `Via Del Web`,
        start_url: `/`,
        background_color: `#217ebd`,
        theme_color: `#217ebd`,
        display: `minimal-ui`,
        icon: `src/images/logo-only.png`, // This path is relative to the root of the site.
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
