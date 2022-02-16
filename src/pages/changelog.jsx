import React from 'react';
import { graphql } from 'gatsby';

import Changelog from '../components/changelog';
import Footer from '../components/footer/footer';
import Breadcrumbs from '../components/breadcrumbs';

const breadcrumbs = [{ name: 'Changelog' }];

export default props => {
  const { footer, changelog } = props.data.allDataJson.edges[0].node;
  return (
    <div id="changelog">
      <div className="container">
        <Breadcrumbs crumbs={breadcrumbs} />
        <Changelog items={changelog} />
      </div>
      <Footer {...footer} changelog={changelog} />
    </div>
  );
};

export const pageQuery = graphql`
  query ChangelogQuery {
    allDataJson {
      edges {
        node {
          changelog {
            version
            date
            description
          }
          footer {
            menuLinks {
              name
              href
            }
            socialLinks {
              name
              href
            }
          }
        }
      }
    }
  }
`;
