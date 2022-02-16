/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../src/components/header';

describe('Header component', () => {
  it('renders correctly', () => {
    const component = shallow(<Header />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
