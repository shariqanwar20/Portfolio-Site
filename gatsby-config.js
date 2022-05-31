module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: ['gatsby-plugin-postcss', {
        resolve: "gatsby-plugin-anchor-links",
        options: {
            offset: -100
        }
    }, `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`],
}