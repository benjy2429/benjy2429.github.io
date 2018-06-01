import React from 'react';
import Header from '../components/header';
import About from '../components/about';
import ProjectsWrapper from '../components/projects/projects-wrapper';
import Contact from '../components/contact';
import Footer from '../components/footer/footer';

export default props => {
  const { projects, footer } = props.data.allDataJson.edges[0].node;
  return (
    <div>
      <Header />
      <About />
      <ProjectsWrapper projects={projects} />
      <Contact />
      <Footer {...footer} />
    </div>
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
            link {
              text
              href
            }
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
