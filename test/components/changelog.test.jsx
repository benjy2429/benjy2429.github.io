/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Changelog from '../../src/components/changelog';

const defaultProps = {
  items: [
    {
      version: 'v2',
      date: '2000-12-25',
      description: 'v2 description'
    },
    {
      version: 'v1',
      date: '1999-01-01',
      description: 'v1 description'
    }
  ]
};

describe('Changelog component', () => {
  beforeAll(() => {
    Date.now = jest.fn().mockReturnValue(new Date('2000-12-25'));
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('renders correctly without items', () => {
    const component = shallow(<Changelog />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with items', () => {
    const component = shallow(<Changelog {...defaultProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly without dates', () => {
    const component = shallow(
      <Changelog
        items={[
          {
            version: 'v1',
            date: '',
            description: 'test'
          }
        ]}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
