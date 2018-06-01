import React from 'react';
import Helmet from 'react-helmet';

import '../styles/all.scss';

export default ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description }
      ]}
    />
    {children()}
  </div>
);

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
