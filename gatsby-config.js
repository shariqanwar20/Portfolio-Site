module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: ['gatsby-plugin-postcss', {
        resolve: "gatsby-plugin-anchor-links",
        options: {
            offset: -100
        }
    }],
}