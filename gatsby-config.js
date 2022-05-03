module.exports = {
    siteMetadata: {
        title: `Follow the Links to Know More`,
        description: `A project to give a free and blazing fast alternative to multiple links on Instagram`,
        author: {
            name: `Rodrigo Favarete`,
            content: `Follow me to know more about my works!`,
        },
        social: {
            github: `https://www.instagram.com/`,
        },
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-material-ui',
            // If you want to use styled components you should change the injection order.
            options: {
                // stylesProvider: {
                //   injectFirst: true,
                // },
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/layout/index.tsx`),
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/content/`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
