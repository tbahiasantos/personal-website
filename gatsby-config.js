// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `Thiago Bahia`,
    description: `My personal hub to the world.`,
    author: `@thiagobahia`,
    siteUrl: `https://www.thiagobahia.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/blog/posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `Montserrat\:400,700,900`,
          `Cutive Mono`
        ],
      },
    },
  ],
}
