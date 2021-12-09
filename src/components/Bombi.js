import React from "react";
import tridi from "../assets/3d/RangeRover.glb"
import tridibg from "../assets/3d/spruit_sunrise_4k.hdr"

import "../css/bombi.scoped.css";

export default class Hero extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Bombi section</h1> */}
        <section id="bombi">
          <div className="full-page">
            <div className="row g-0">
              <div className="col-12 col-lg-7">
                {/* <model-viewer 
                  src="http://8.136.209.44/ARdemo/three.js-master/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf"
                  auto-rotate
                  camera-controls
                  style={{width: "100%", height: "100%"}}
                  >
                </model-viewer> */}
                <div className="vh-100" style={{"overflow-x": "hidden"}}>
                  <span style={{position: "absolute", "font-size": "200px", top:"70%", left:"5%"}} class="font-weight-bold varsity-text text-red">
                    BOMBI
                  </span>
                  <model-viewer 
                    camera-controls 
                    src="http://8.136.209.44/ARdemo/three.js-master/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf" 
                    ar ar-modes="webxr scene-viewer quick-look" 
                    alt="A 3D transparency test" 
                    class="model"
                    style={{"background-color": "unset", width: "100%", height: "100%"}}>
                  </model-viewer>
                </div>
              </div>
              <div className="col-12 col-lg-4 offset-lg-1">
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
                      <a href="#blog" class="btn btn-danger">Learn More</a>
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
