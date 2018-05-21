import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/all.scss';
import AppComponent from './components/app';

// eslint-disable-next-line no-undef
ReactDOM.render(<AppComponent />, document.getElementById('main'));
