import React from 'react';
import data from '../data.json';

export default (WrappedComponent, _data = data) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.data = _data;
    }
    render() {
      return <WrappedComponent {...this.props} {...this.data} />;
    }
  };
