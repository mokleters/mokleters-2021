import React from "react";
import video from"../assets/videos/dummy-video.mp4";
import "../css/About.scoped.css";

export default class About extends React.Component {
  stopMovie = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
    console.log('off');
  }
  
  playMovie = (e) => {
    e.target.play();
    console.log('on');
  }
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">About section</h1> */}
        <div className="about">
          <div class="container">
            <div class="box">
              <video src={video} type="video/mp4" loop class="clip" muted
              onMouseOver={this.playMovie}
              onMouseOut={this.stopMovie}
              
              ></video>
            </div>
            <div class="box">
              <video src={video} type="video/mp4" loop class="clip" muted
              onMouseOver={this.playMovie}
              onMouseOut={this.stopMovie}
              ></video>
            </div>

            <div class="overlay row h-300 align-items-center justify-content-center text-center">
                  <div class="about-text align-self-end">
                    <h1 class="font-weight-bold">
                      ABOUT MOKLETERS
                    </h1>
                    <p>Lorem Ipsum is simpley dummy text of the printing dummy</p>                
                </div>        
              </div>
          </div>
        </div>
      </>
    );
  }
}
