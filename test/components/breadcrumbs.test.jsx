/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Breadcrumbs from '../../src/components/breadcrumbs';

describe('Breadcrumbs component', () => {
  it('does not render with no crumbs', () => {
    const component = shallow(<Breadcrumbs />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders crumbs with links', () => {
    const crumbs = [{ name: 'Crumb', href: '/crumb' }];
    const component = shallow(<Breadcrumbs crumbs={crumbs} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders crumbs without links', () => {
    const crumbs = [{ name: 'Crumb' }];
    const component = shallow(<Breadcrumbs crumbs={crumbs} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
