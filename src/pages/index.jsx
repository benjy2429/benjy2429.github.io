import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Header from '../components/header';
import About from '../components/about';
import ProjectsWrapper from '../components/projects/projects-wrapper';
import Contact from '../components/contact';
import Footer from '../components/footer/footer';

export default props => {
  const { projects, changelog, footer } = props.data.allDataJson.edges[0].node;
  const markdownData = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Header />
      <About data={markdownData} />
      <ProjectsWrapper projects={projects} />
      <Contact />
      <Footer {...footer} changelog={changelog} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          projects {
            title
            image
            text
            file
            tags
            link {
              text
              href
            }
          }
          changelog {
            version
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
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
