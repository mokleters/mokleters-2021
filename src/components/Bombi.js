import React from "react";
import tridi from "../assets/3d/RangeRover.glb"
import tridibg from "../assets/3d/spruit_sunrise_4k.hdr"

export default class Hero extends React.Component {
  render() {
    return (
      <>
        <h1 className="b-example-divider mb-0">Bombi section</h1>
        {/* <model-viewer 
          skybox-image={tridibg}
          src="http://8.136.209.44/ARdemo/three.js-master/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf"
          auto-rotate
          camera-controls
          style={{width: "100%", height: "900px"}}
          >
        </model-viewer> */}
      </>
    );
  }
}
