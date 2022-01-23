import React from "react";
import tridi from "../../assets/3d/Bombi_ReMetal.glb"
import bombi_image from "../../assets/3d/bombi.png"

import "../../css/bombi.scoped.css";

export default class Hero extends React.Component {
  constructor() {
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
              <div className={this.state.isPlay ? this.state.isPlayOn_1 : this.state.isPlayOff_1}>
                {this.state.isPlay === true ? (
                  <model-viewer
                    bounds="tight"
                    src={tridi}
                    ar ar-modes="webxr scene-viewer quick-look"
                    camera-controls environment-image="neutral"
                    poster={bombi_image}
                    shadow-intensity="1"
                    camera-target="0m 6.85m 0.3887m"
                    camera-orbit="-39.16deg 75deg auto"
                    auto-rotate
                    style={{ "background-color": "unset", width: "100%", height: "100%" }} />
                ) : (
                  <img
                    src={bombi_image}
                    style={{ "background-color": "unset", width: "100%", height: "100%" }} />
                )}

              </div>
              <div className={this.state.isPlay ? this.state.isPlayOn_2 : this.state.isPlayOff_2}>
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

                      <div class="btn-toolbar">
                        <div class="btn-group m-1">
                          {this.state.isPlay === false ? (
                            <>
                              <button type="button" class="d-none d-md-block btn btn-danger" onClick={() => this.setState({ isPlay: true })}>Play Now</button>
                              <button type="button" class="d-md-none btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal">Play on Mobile</button>
                            </>
                          ) : (
                            <button type="button" class="btn btn-danger" onClick={() => this.setState({ isPlay: false })}>Stop Now</button>
                          )}
                        </div>
                        <div class="btn-group m-1">
                          <button href="#blog" class="btn btn-danger">Learn More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body vh-100 p-0">
                <div className={this.state.isPlayOn_1}>
                <model-viewer
                  bounds="tight"
                  src={tridi}
                  ar ar-modes="webxr scene-viewer quick-look"
                  camera-controls environment-image="neutral"
                  poster={bombi_image}
                  shadow-intensity="1"
                  camera-target="0m 6.85m 0.3887m"
                  camera-orbit="-39.16deg 75deg auto"
                  auto-rotate
                  style={{ "background-color": "unset", width: "100%", height: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
