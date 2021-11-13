import React from "react";
import logo from "./../images/logo.png";
import "./../css/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div clasName="header">
      <navbar className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-5 mb-4">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark"
        >
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            width="70%"
            height="50%"
          ></img>
        </a>

        <ul className="nav col-12 col-md-auto mb-1 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-3 link-dark">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link px-3 link-dark">
              Organizations
            </a>
          </li>
          <li>
            <a href="/" className="nav-link px-3 link-dark">
              News
            </a>
          </li>
          <li>
            <a href="/" className="nav-link px-3 link-dark">
              About Us
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn-login rounded-pill">
            Login
          </button>
        </div>
      </navbar>
    </div>
  );
}

export default Navbar;
