require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'JSNE Demo',
    description: 'Gatsby demo for JavaScript NE',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
  ],
}
