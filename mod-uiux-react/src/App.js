import React from 'react';

import Header from './Containers/Header/header';
import Footer from './Containers/Footer/footer';
import Possibility from './Containers/Posibility/posibility';
import WhatGPT from './Containers/WhatGPT/whatgpt3';
import Features from './Containers/Features/features';
import Blog from './Containers/Blog/blog';
import CTA from './Components/CTA/cta';
import Brand from './Components/Brand/brand';
import Navbar from './Components/Navbar/navbar';



// import { Footer, Blog, Possibility, Features, WhatGPT, Header } from './Containers';
// import { CTA, Brand, Navbar } from './Components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;