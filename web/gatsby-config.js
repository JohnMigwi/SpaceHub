require('dotenv').config('./.env');
const sanityConfig = require('./sanity-config');

module.exports = {
  siteMetadata: {
    title: `SpaceHub-blog`,
    siteUrl: `https://spacehub-blog.netlify.com`,
    description: `SpaceHub Blog is a platform for latest technology news and updates.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
      },
    },
  ],
};
