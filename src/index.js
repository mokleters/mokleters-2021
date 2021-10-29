import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer' 
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);