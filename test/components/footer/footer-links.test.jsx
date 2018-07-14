import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FooterLinks from '../../../src/components/footer/footer-links';

const internalLinksProps = {
  title: 'Menu',
  links: [
    {
      name: 'Link 1',
      href: '/test'
    }
  ]
};

const externalLinksProps = {
  title: 'Menu',
  links: [
    {
      name: 'Link 1',
      href: 'https://test.com'
    }
  ]
};

describe('Footer component', () => {
  it('renders a list of internal links', () => {
    const component = shallow(<FooterLinks {...internalLinksProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders a list of external links', () => {
    const component = shallow(<FooterLinks {...externalLinksProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
