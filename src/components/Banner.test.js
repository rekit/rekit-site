import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Banner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
