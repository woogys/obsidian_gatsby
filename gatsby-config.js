module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/home`,
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: `Woogy's Blog`,
//     title: process.env.SITE_NAME,
  },
}
