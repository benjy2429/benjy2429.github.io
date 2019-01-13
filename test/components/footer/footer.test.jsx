import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../../src/components/footer/footer';

const props = {
  menuLinks: 'menuLinks',
  socialLinks: 'socialLinks',
  changelog: [{ version: 'v1' }]
};

describe('Footer component', () => {
  const originalDate = Date;

  beforeAll(() => {
    global.Date = jest.fn(() => ({
      getFullYear: () => 2000
    }));
  });

  afterAll(() => {
    global.Date = originalDate;
  });

  it('renders correctly', () => {
    const component = shallow(<Footer {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
