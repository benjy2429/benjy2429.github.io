import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProjectsWrapper from '../../../src/components/projects/projects-wrapper';

const mockProject = {
  title: 'Demo project',
  image: 'project-image.jpg',
  text: 'Project description'
};

describe('Projects wrapper component', () => {
  it('renders a list of projects', () => {
    const component = shallow(<ProjectsWrapper projects={[mockProject]} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
