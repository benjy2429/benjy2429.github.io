import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Contact from '../../src/components/contact';

describe('Contact component', () => {
  it('renders correctly', () => {
    const component = shallow(<Contact />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
