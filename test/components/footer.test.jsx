import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../src/components/footer';

const socialLinks = [
  {
    name: 'Social link',
    href: 'social.com'
  }
];

describe('Footer component', () => {
  it('renders with social links', () => {
    const component = shallow(<Footer socialLinks={socialLinks} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
