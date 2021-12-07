import React from "react";
import "../css/Hero.scoped.css";

import logo from "../assets/hero/hero-logo.svg";
import video from "../assets/videos/dummy-video.mp4";

export default class Hero extends React.Component {
  // Menggunakan js untuk play video karena jika tidak
  // video tidak mau play
  playMovie = (e) => {
    e.target.play();
    console.log('on');
  }
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Hero section</h1> */}
        <section class="hero">
          <video class="video-slide active" src={video} autoplay muted loop onLoadStart={this.playMovie}></video>
          <div class="content active">
            <div class="row gx-4 gx-lg-5 h-300 align-items-center justify-content-center text-center">
              <div class="col-lg-8 align-self-baseline">
                <h1 class="font-weight-bold varsity-text">
                  WITH<span> MOKLETERS </span>COMES BLESSEDNESS
                </h1>
                <i class="fas fa-gem me-3">
                
                  <img src={logo} className="hero-logo" alt="logo" width="9%" height="9%"></img>
                  
                </i>                                    
                <i class="arrow fas fa-gem me-3"></i>           
              </div>
            </div>
          </div>
        </section>    
      </>
    );
  }
}
