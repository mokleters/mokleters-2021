import React from 'react';
import logo from './../images/logo.png';
import './../css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="header">

    {/* Navbar */}
    <navbar className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-5 mb-4">
      <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={logo} className="App-logo" alt="logo" width="70%" height="50%"></img>
      </a>

      <ul className="nav col-12 col-md-auto mb-1 justify-content-center mb-md-0">
        <li><a href="/" className="nav-link px-3 link-dark">Home</a></li>
        <li><a href="/" className="nav-link px-3 link-dark">Organizations</a></li>
        <li><a href="/" className="nav-link px-3 link-dark">News</a></li>
        <li><a href="/" className="nav-link px-3 link-dark">About Us</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn-login rounded-pill">Login</button>
      </div>
    </navbar>
    {/* Hero */}
    <hero>
        <div className="hero">
        <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-300 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-baseline">
                        <p className="subtitle">Dari Mokleter Untuk Mokleters</p>
                    <div class="align-self-end">
                        <h1 class="font-weight-bold">MOKLET<span>ERS</span></h1>
                    </div>                    
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
                        <button type="button" className="btn-explore rounded-pill">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    </hero>
    </div>
  );
}

export default Header;
