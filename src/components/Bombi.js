import React from "react";
import tridi from "../assets/3d/RangeRover.glb"
import tridibg from "../assets/3d/spruit_sunrise_4k.hdr"
import bombi_image from "../assets/3d/bombi.png"

import "../css/bombi.scoped.css";

export default class Hero extends React.Component {
  constructor(){
    super()
    this.state = {
      isPlay: false,
      isPlayOn_1: "container col-12 col-lg-7 parent vh-100",
      isPlayOff_1: "container col-12 col-lg-6 parent vh-100",
      isPlayOn_2: "col-12 col-lg-4 offset-lg-1 parent2",
      isPlayOff_2: "col-12 col-lg-6 parent2"
    }
  }

  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Bombi section</h1> */}
        <section id="bombi">
          <div className="full-page">
            <div className="row g-0 vh-100">
              <div className={this.state.isPlay ? this.state.isPlayOn_1:this.state.isPlayOff_1}>
                {this.state.isPlay === true ? (
                  <model-viewer 
                  src={tridi}
                  auto-rotate
                  camera-controls
                  style={{"background-color": "unset", width: "100%", height: "100%"}}>
                </model-viewer>
                ):(
                  <div className="col-10 offset-sm-2 col-lg-4 offset-lg-4">
                    <div class="d-flex align-items-center vh-100">
                      <img src={bombi_image} className="img-fluid"/>
                    </div>
                  </div>
                )}
                
              </div>
              <div className={this.state.isPlay ? this.state.isPlayOn_2:this.state.isPlayOff_2}>
                <div class="d-flex align-items-center vh-100">
                  <div class="col col-lg-8 m-4">
                    <div class="text h-300 align-items-left justify-content-left text-left">
                      <h2>Introduction to Our Mascot</h2>
                      <h1 class="font-weight-bold varsity-text text-red">
                        BOMBI
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      </p>
                      {this.state.isPlay === false ? (
                        <a type="button" class="btn btn-danger shake"
                        onClick={() => this.setState({isPlay: true})}>Play Now</a>
                      ):(
                        <a type="button" class="btn btn-danger"
                          onClick={() => this.setState({isPlay: false})}>Stop Now</a>
                      )}
                      <a href="#blog" class="btn btn-danger m-3">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
