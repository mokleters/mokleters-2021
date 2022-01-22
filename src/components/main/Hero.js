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
    // console.log("on");
  };
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Hero section</h1> */}
        <Navbar />
        <section id="hero" className="hero full-page">
          <video
            class="vh-100"
            src={video}
            autoplay
            muted
            loop
            onLoadStart={this.playMovie}
          />
          <div class="content">
            <div className="row d-flex text-center justify-content-center">
              <h1 class="varsity-text">
                WITH<span> MOKLETERS </span>COMES BLESSEDNESS
              </h1>
              <img
                src={logo}
                className="hero-logo img-fluid"
                alt="logo"
                width="25%"
                height="25%"
              />
            </div>
          </div>
          <a href="#about" class="arrow" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-chevron-double-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </section>
      </>
    );
  }
}
