import React from 'react';
import Header from './header';
import Section from './section';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

const education = {
  sectionTitle: 'Education',
  content: [
    { text: 'I graduated from <a href="https://www.sheffield.ac.uk/">The University of Sheffield</a> in 2015 with a First Class Masters degree in Computer Science. For my dissertation, I developed a real-time shadow puppet storytelling application using Microsoft’s Kinect sensor and C++.' },
    { text: 'I also worked as a Student Abassador during my final years. This involved helping out at open days and events, demonstrating in technical activities and giving presentations about life as a student.' }
  ]
};

const work = {
  sectionTitle: 'Work',
  content: [
    { text: 'I\'m currently working as an associate software developer for <a href="https://www.sky.com">Sky</a> in Leeds.' },
    { text: 'I joined through the Software Engineering Academy graduate scheme. This involved a six month project developing a piece of software in an agile team. In our team, we created a digital whiteboard for visualising and orgainising development squads.' },
    { text: 'These days you\'ll find me in the Digital Help team programming mainly in ReactJS and Ruby. I deal with frontend apps such as the <a href="https://www.sky.com/help">Help Homepage</a> and <a href="https://contactus.sky.com">Contact Us</a> as well as backend services and CMS\'s that power the help articles and diagnostic flows.' }
  ]
};

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
    text: 'A digital whiteboard built with ReactJS to manage development squads and employees.'
  },
  {
    title: 'Dissertation',
    image: 'dissertation.png',
    text: 'A real-time shadow puppet storytelling application using a Kinect sensor and C++.',
    file: 'Dissertation_Ben_Carr.pdf'
  },
  {
    title: 'Social Sheffield',
    image: 'social-sheffield.png',
    text: 'A search tool designed to help you find events and activities to do around Sheffield.',
    link: {
      text: 'Visit site',
      href: 'http://www.socialsheffield.net'
    }
  },
  {
    title: 'Academicus',
    image: 'academicus.png',
    text: 'A Swift app that allows students to track their academic progress and achievements.'
  },
  {
    title: 'London Power Tunnels',
    image: 'costain.png',
    text: 'A system built for engineering firm Costain to monitor trains within underground tunnels.'
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

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="about" className="container">
          <Section {...education} />
          <Section {...work} />
        </div>
        <Projects projects={projects} />
        <Contact />
        <Footer socialLinks={socialLinks} />
      </div>
    )
  }
};
