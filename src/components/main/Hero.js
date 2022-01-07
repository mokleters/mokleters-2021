import React from "react";
import "../../css/Hero.scoped.css";

import logo from "../../assets/hero/hero-logo.svg";
import video from "../../assets/videos/Hero.mp4";
import Navbar from "./Navbar";

export default class Hero extends React.Component {
  // Menggunakan js untuk play video karena jika tidak
  // video tidak mau play
  playMovie = (e) => {
    e.target.play();
    console.log("on");
  };
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Hero section</h1> */}
        <Navbar />
        <section id="hero" className="hero">
          <video
            class="vh-100"
            src={video}
            autoplay
            muted
            loop
            onLoadStart={this.playMovie}
          />
          <div class="content">
            <div class="d-flex align-items-center">
              <div class="container d-flex justify-content-center text-center">
                <div className="col d-block">
                  <h1 class="varsity-text">
                    WITH<span> MOKLETERS </span>COMES BLESSEDNESS
                  </h1>
                  <img
                    src={logo}
                    className="hero-logo"
                    alt="logo"
                    width="25%"
                    height="25%"
                  />
                  <a href="#about">
                    <i class="arrow fas fa-gem me-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
