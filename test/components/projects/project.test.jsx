import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Project from '../../../src/components/projects/project';

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

describe('Project component', () => {
  it('renders a project', () => {
    const component = shallow(<Project {...mockProject} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders a project with a link', () => {
    const component = shallow(<Project {...mockProjectWithLink} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders a project with a file', () => {
    const component = shallow(<Project {...mockProjectWithFile} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
