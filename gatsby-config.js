module.exports = {
  siteMetadata: {
    title: `Kaung Myat Lwin`,
    description: `A software developer based in Yangon.`,
    author: `@dev_kmlwin`,
    siteUrl: 'https://kaungmyatlwin.dev',
  },
  plugins: [
    {
      resolve: `gatsby-source-openweathermap`,
      options: {
        apikey: '009db423a922137c9442788dae5544c5',
        location: 'Yangon',
        units: 'metric',
        type: 'weather',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
