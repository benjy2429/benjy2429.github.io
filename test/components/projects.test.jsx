import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Projects from '../../src/components/projects';

const mockProject = {
  title: 'Demo project',
  image: 'project-image.jpg',
  text: 'Project description'
};

const mockProjectWithLink = {
  ...mockProject,
  link: {
    text: 'Visit site',
    href: 'test.com'
  }
};

const mockProjectWithFile = {
  ...mockProject,
  file: 'file.pdf'
};

describe('Projects component', () => {
  it('renders projects', () => {
    const component = shallow(<Projects projects={[mockProject]} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders projects with a link', () => {
    const component = shallow(<Projects projects={[mockProjectWithLink]} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders projects with a file', () => {
    const component = shallow(<Projects projects={[mockProjectWithFile]} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
