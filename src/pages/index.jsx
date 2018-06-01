import React from 'react';
import Header from '../components//header';
import About from '../components//about';
import ProjectsWrapper from '../components//projects/projects-wrapper';
import Contact from '../components//contact';
import Footer from '../components//footer/footer';

export const App = ({ projects, footer }) => (
  <div>
    <Header />
    <About />
    <ProjectsWrapper projects={projects} />
    <Contact />
    <Footer {...footer} />
  </div>
);

export default App;
