/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import dataLoader from '../../src/components/data-loader';

const Component = () => <div>wrapped component</div>;
const dataFile = { foo: 'foo' };

describe('Data loader component', () => {
  it('renders wrapped component with data', () => {
    const WrappedComponent = dataLoader(Component, dataFile);
    const output = shallow(<WrappedComponent bar="bar" />);
    expect(toJson(output)).toMatchSnapshot();
  });
});
