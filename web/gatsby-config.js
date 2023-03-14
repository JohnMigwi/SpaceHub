require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `SpaceHub-blog`,
    siteUrl: `https://spacehub-blog.netlify.com`,
    description: `SpaceHub Blog is a platform for latest technology news and updates.`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
