import React from 'react';
import dataLoader from './data-loader';
import Header from './header';
import About from './about';
import ProjectsWrapper from './projects/projects-wrapper';
import Contact from './contact';
import Footer from './footer/footer';

export const App = ({ projects, footer }) => (
  <React.Fragment>
    <Header />
    <About />
    <ProjectsWrapper projects={projects} />
    <Contact />
    <Footer {...footer} />
  </React.Fragment>
);

export default dataLoader(App);
