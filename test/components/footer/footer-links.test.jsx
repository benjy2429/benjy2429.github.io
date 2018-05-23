import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FooterLinks from '../../../src/components/footer/footer-links';

const props = {
  title: 'Menu',
  links: [
    {
      name: 'Link 1',
      href: 'example.test'
    }
  ]
};

describe('Footer component', () => {
  it('renders a list of links', () => {
    const component = shallow(<FooterLinks {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
