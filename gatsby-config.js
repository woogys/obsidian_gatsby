module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`, `${__dirname}/src/site/img/user/03_Attached%20Files`,
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
