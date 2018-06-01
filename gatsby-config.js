module.exports = {
  siteMetadata: {
    title: 'Ben Carr | Software Developer',
    description:
      'Software developer at Sky and graduate from The University of Sheffield. This is my slice of the internet.'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    }
  ]
};
