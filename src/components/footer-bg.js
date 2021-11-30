import React from "react";
import '../css/Footers.css';

export default class FooterBg extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Footer section</h1> */}
        <div class="bg-mokleters px-4 py-5 text-center">
          <div class="py-5">
            <div class="col-lg-5 mx-auto">
              <p class="fs-5 mb-4 text-white">
              “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's  standard dummy text ever since the 1500s.”
              </p>
              <h1 class="text-desc-footer">- Lorem Ipsum -</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
