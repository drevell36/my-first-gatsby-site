module.exports = {
  siteMetadata: {
    title: "Dazmatron's Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};