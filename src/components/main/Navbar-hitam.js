import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/hero/hero-logo.svg";
import video from "../../assets/videos/dummy-video.mp4";
import menu from "../../assets/hero/menu.png";
import ig from "../../assets/footer/ig.png";
import twt from "../../assets/footer/twt.png";
import tiktok from "../../assets/footer/tiktok.png";
import yt from "../../assets/footer/yt.png";
import line from "../../assets/hero/line.png";
import navLogo from "../../assets/navbar/logo-white.png";
import "../../css/navbar.scoped.css";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [brand, setBrand] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
      setBrand(true);
    } else {
      setNavbar(false);
      setBrand(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <section id="navbar">
        <div class="navbar-container">
          <nav class="navbar active navbar-dark">
            <div class="container-fluid">
              <span>
                <p class="nav-item navbar-item menu shop text-white px-4 mx-2">
                  <a
                    class="back"
                    href="/olshop#product"
                    style={{
                      textDecoration: "none",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Back
                  </a>
                </p>
              </span>
              <ul class="navbar-nav brand">
                <img class="nav-logo" src={navLogo} alt="" width="50px" />
              </ul>
              <ul class="navbar-nav login right-item navbar-right text-white">
                <li class="nav-item navbar-item px-5">Login</li>
              </ul>
              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div class="offcanvas-header">
                  <button
                    class="btn-close btn-close-white text-reset px-3 py-4"
                    type="button"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div class="offcanvas-body">
                  <ul class="sidebar-nav justify-content-start">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#hero">
                        HOME
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#about">
                        ABOUT
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#bombi">
                        BOMBI
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#organization">
                        ORGANIZATIONS
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#olshop">
                        SHOP
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#blog">
                        BLOG
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="/links">
                        LINKS
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="/olshop">
                        OLSHOP
                      </a>
                    </li>
                  </ul>
                  <div class="row">
                    <div class="col-md-5 col-sm-12 px-4">
                      <ul class="justify-content list-unstyled d-flex">
                        <li>
                          <a href="#">
                            <img src={ig} />
                          </a>
                        </li>
                        <li class="ms-3">
                          <a href="#">
                            <img src={twt} />
                          </a>
                        </li>
                        <li class="ms-3">
                          <a href="#">
                            <img src={tiktok} />
                          </a>
                        </li>
                        <li class="ms-3">
                          <a href="#">
                            <img src={yt} />
                          </a>
                        </li>
                      </ul>
                      <img src={line} alt="" width="100%" class="line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
export default Navbar;
