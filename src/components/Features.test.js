import React from 'react';
import ReactDOM from 'react-dom';
import Features from './Features';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Features />, div);
  ReactDOM.unmountComponentAtNode(div);
});
