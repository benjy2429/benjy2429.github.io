import React from 'react';
import Changelog from '../components/changelog';
import Footer from '../components/footer/footer';

export default props => {
  const { footer, changelog } = props.data.allDataJson.edges[0].node;
  return (
    <div id="changelog">
      <div className="container">
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
