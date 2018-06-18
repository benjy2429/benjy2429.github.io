import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import About from '../../src/components/about';

const defaultProps = [
  {
    node: {
      html: 'foo',
      frontmatter: {
        title: 'Work'
      }
    }
  },
  {
    node: {
      html: 'bar',
      frontmatter: {
        title: 'Education'
      }
    }
  }
];

describe('About component', () => {
  it('renders correctly', () => {
    const component = shallow(<About data={defaultProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly when data is not available', () => {
    const component = shallow(<About data={[]} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
