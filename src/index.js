import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer' 
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Landing/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);