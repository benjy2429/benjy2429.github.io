import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { App } from '../../src/components/app';

const props = {
  projects: 'projects',
  socialLinks: 'socialLinks'
};

describe('App component', () => {
  it('renders correctly', () => {
    const component = shallow(<App {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
