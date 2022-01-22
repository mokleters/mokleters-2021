import React from "react";
import "../../css/About.scoped.css";

import video from "../../assets/videos/dummy-video.mp4";

export default class About extends React.Component {
  stopMovie = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
    console.log("off");
  };

  playMovie = (e) => {
    e.target.play();
    console.log("on");
  };
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">About section</h1> */}
        <section id="about" class="">
          <div className="about">
            <div class="container vh-100">
              <div class="box">
                <video
                  src={video}
                  type="video/mp4"
                  loop
                  class="clip"
                  muted
                  onMouseOver={this.playMovie}
                  onMouseOut={this.stopMovie}
                />
              </div>
              <div class="box">
                <video
                  src={video}
                  type="video/mp4"
                  loop
                  class="clip"
                  muted
                  onMouseOver={this.playMovie}
                  onMouseOut={this.stopMovie}
                />
              </div>

              {/* <div class="content">
                <div class="row d-flex justify-content-center text-center">
                  <div class="about-text">
                    <h1 class="varsity-text">
                      ABOUT <span class="text-red">MOKLETERS</span>
                    </h1>
                    <p class="text-center">
                      Lorem Ipsum is simpley dummy text of the printing dummy
                    </p>
                  </div>
                </div>
              </div> */}

              <div class="content">
                <div className="row d-flex text-center justify-content-center">
                  <h1 class="varsity-text">
                    ABOUT<span> MOKLETERS </span>
                  </h1>
                  <p class="text-center">
                    Lorem Ipsum is simpley dummy text of the printing dummy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
