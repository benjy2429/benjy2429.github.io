import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import About from '../../src/components/about';

describe('About component', () => {
  it('renders correctly', () => {
    const component = shallow(<About />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
