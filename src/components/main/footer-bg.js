import React from "react";
import '../../css/Footers.scoped.css';

export default class FooterBg extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Footer section</h1> */}
        {/* <div class="bg-mokleters px-4 py-5 text-center">
          <div class="py-5">
            <div class="col-lg-5 mx-auto">
              <p class="fs-5 mb-4 text-white">
                “Fight Together, Never Surrender!”
              </p>
              <h1 class="text-desc-footer">- Mokleters -</h1>
            </div>
          </div>
        </div> */}

        <div class="d-flex align-items-center bg-mokleters text-white">
          <div class="container d-flex justify-content-center">
            <div className="text-center">
              <p class="fs-5 text-white">
                “Fight Together, Never Surrender!”
              </p>
              <h1 class="text-desc-footer">- Mokleters -</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
