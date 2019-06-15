import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Features from './Features';

import './HomePage.less';

function HomePage(props) {
  return (
    <div className="components-HomePage">
      <Header />
      <Banner />
      <Features />
    </div>
  );
}

export default HomePage;
