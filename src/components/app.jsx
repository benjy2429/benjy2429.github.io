import React from 'react';
import Header from './header';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

const projects = [
  {
    title: 'CircleCI Build Monitor',
    image: 'circleci.png',
    text: 'A simple Ruby on Rails build monitor for CircleCI projects.',
    link: {
      text: 'View on GitHub',
      href: 'https://github.com/benjy2429/circleci-build-monitor'
    }
  },
  {
    title: 'Digital Whiteboard',
    image: 'whiteboard.png',
    text:
      'A digital whiteboard built with ReactJS to manage development squads and employees.'
  },
  {
    title: 'Dissertation',
    image: 'dissertation.png',
    text:
      'A real-time shadow puppet storytelling application using a Kinect sensor and C++.',
    file: 'Dissertation_Ben_Carr.pdf'
  },
  {
    title: 'Social Sheffield',
    image: 'social-sheffield.png',
    text:
      'A search tool designed to help you find events and activities to do around Sheffield.',
    link: {
      text: 'Visit site',
      href: 'http://www.socialsheffield.net'
    }
  },
  {
    title: 'Academicus',
    image: 'academicus.png',
    text:
      'A Swift app that allows students to track their academic progress and achievements.'
  },
  {
    title: 'London Power Tunnels',
    image: 'costain.png',
    text:
      'A system built for engineering firm Costain to monitor trains within underground tunnels.'
  }
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://www.github.com/benjy2429'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/benmcarr'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/benjy2429'
  }
];

export default () => (
  <div>
    <Header />
    <About />
    <Projects projects={projects} />
    <Contact />
    <Footer socialLinks={socialLinks} />
  </div>
);
