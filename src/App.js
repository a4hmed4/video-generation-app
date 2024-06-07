import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Team, Header, WhatVGA, Application } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Team />
    <WhatVGA />
    <Features />
    <Application />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
