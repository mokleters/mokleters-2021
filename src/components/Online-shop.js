import React from "react";
import '../css/Olshop.css'

import item1 from "../assets/olshop/item-1.png";
import item2 from "../assets/olshop/item-2.png";
import item3 from "../assets/olshop/item-3.png";
import item4 from "../assets/olshop/item-4.png";
import icon1 from "../assets/olshop/olshop-icon-1.png";
import icon2 from "../assets/olshop/olshop-icon-2.png";

export default class Olshop extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Online-shop section</h1> */}
        <div class="container content-img text-center text-md-start mt-5 overflow-hidden">
          {/* <!-- Grid row --> */}
          <div class="row mt-5">
            <div class="col-lg-6 px-1 px-lg-5 h-100">
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img src={item1} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item2} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item3} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item4} height="250" width="250" alt="" />
                </div>		
                <div class="slide">
                  <img src={item1} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item2} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item3} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item4} height="250" width="250" alt="" />
                </div>
              </div>
              <div class="slide-track2">
                <div class="slide">
                  <img src={item1} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item2} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item3} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item4} height="250" width="250" alt="" />
                </div>		
                <div class="slide">
                  <img src={item1} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item2} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item3} height="250" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={item4} height="250" width="250" alt="" />
                </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 mx-auto">
              {/* <!-- Links --> */}
              <div class="text h-300 align-items-left justify-content-left text-left">
                <h2>Here's Our</h2>
                <h1 class="font-weight-bold">
                  ONLINE SHOP
                </h1>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>

                <button type="button" className="btn-olshop">
                  Go Shop
                </button>
              </div>
            </div>
            {/* <!-- Grid column -->*/}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </>
    );
  }
}
