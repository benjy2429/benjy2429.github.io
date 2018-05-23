import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../../src/components/footer/footer';

const props = {
  menuLinks: 'menuLinks',
  socialLinks: 'socialLinks'
};

describe('Footer component', () => {
  it('renders correctly', () => {
    const component = shallow(<Footer {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
