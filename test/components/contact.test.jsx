import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Contact from '../../src/components/contact';

const validState = {
  name: { value: 'testName', errors: [] },
  email: { value: 'testEmail', errors: [] },
  message: { value: 'testMessage', errors: [] }
};

const mockEvent = { preventDefault: () => {} };

describe('Contact component', () => {
  const originalFetch = window.fetch;
  const originalLocationAssign = window.location.assign;

  beforeEach(() => {
    window.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve({ status: 200 }) })
      );
    window.location.assign = jest.fn();
  });

  afterAll(() => {
    window.fetch = originalFetch;
    window.location.assign = originalLocationAssign;
  });

  it('renders correctly', () => {
    const component = shallow(<Contact />);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('with validation errors', () => {
    it('renders validation errors on submit', async () => {
      const component = shallow(<Contact />);
      await component.instance().submitForm(mockEvent);
      component.update();

      const validationErrors = component.find('.validation-error');
      expect(validationErrors.length).toBeGreaterThan(0);
      expect(validationErrors.first().text()).toEqual(
        'Please enter a valid name'
      );
    });
  });

  describe('with a successful response', () => {
    it('redirects to the success page', () => {
      const component = shallow(<Contact />);
      component.setState(validState);
      component
        .instance()
        .submitForm(mockEvent)
        .then(() => {
          expect(window.location.assign).toHaveBeenCalledWith('/thanks');
        });
    });
  });

  describe('with a successful response', () => {
    it('redirects to the error page', () => {
      window.fetch.mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve({ status: 500 }) })
      );

      const component = shallow(<Contact />);
      component.setState(validState);
      component
        .instance()
        .submitForm(mockEvent)
        .then(() => {
          expect(window.location.assign).toHaveBeenCalledWith('/formerror');
        });
    });
  });

  describe('with a failed response', () => {
    it('redirects to the error page', () => {
      window.fetch.mockImplementation(() => Promise.reject());

      const component = shallow(<Contact />);
      component.setState(validState);
      component
        .instance()
        .submitForm(mockEvent)
        .then(() => {
          expect(window.location.assign).toHaveBeenCalledWith('/formerror');
        });
    });
  });
});
