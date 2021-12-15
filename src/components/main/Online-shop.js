import React from "react";
import '../../css/Olshop.scoped.css'

import item1 from "../../assets/olshop/item-1.png";
import item2 from "../../assets/olshop/item-2.png";
import item3 from "../../assets/olshop/item-3.png";
import item4 from "../../assets/olshop/item-4.png";
import item5 from "../../assets/olshop/item-5.png";

export default class Olshop extends React.Component {
  render() {
    return (
      <section id="olshop">
        <div className="full-page">
          <div className="row g-0">
            <div className="col-12 col-lg-6">
              <div className="row g-0 parent">
                <div className="col offset-lg-4 col-lg-4">
                  <div className="track1">
                    <img class="img-fluid m-3" src={item1} alt="" />
                    <img class="img-fluid m-3" src={item2} alt="" />
                    <img class="img-fluid m-3" src={item3} alt="" />
                    <img class="img-fluid m-3" src={item4} alt="" />
                    <img class="img-fluid m-3" src={item5} alt="" />
                    <img class="img-fluid m-3" src={item1} alt="" />
                    <img class="img-fluid m-3" src={item2} alt="" />
                    <img class="img-fluid m-3" src={item3} alt="" />
                    <img class="img-fluid m-3" src={item4} alt="" />
                    <img class="img-fluid m-3" src={item5} alt="" />
                    <img class="img-fluid m-3" src={item1} alt="" />
                    <img class="img-fluid m-3" src={item2} alt="" />
                    <img class="img-fluid m-3" src={item3} alt="" />
                    <img class="img-fluid m-3" src={item4} alt="" />
                    <img class="img-fluid m-3" src={item5} alt="" />
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="track2">
                    <img class="img-fluid m-3" src={item1} alt="" />
                    <img class="img-fluid m-3" src={item2} alt="" />
                    <img class="img-fluid m-3" src={item3} alt="" />
                    <img class="img-fluid m-3" src={item4} alt="" />
                    <img class="img-fluid m-3" src={item5} alt="" />
                    <img class="img-fluid m-3" src={item1} alt="" />
                    <img class="img-fluid m-3" src={item2} alt="" />
                    <img class="img-fluid m-3" src={item3} alt="" />
                    <img class="img-fluid m-3" src={item4} alt="" />
                    <img class="img-fluid m-3" src={item5} alt="" />
                    <img class="img-fluid m-3" src={item1} alt="" />
                    <img class="img-fluid m-3" src={item2} alt="" />
                    <img class="img-fluid m-3" src={item3} alt="" />
                    <img class="img-fluid m-3" src={item4} alt="" />
                    <img class="img-fluid m-3" src={item5} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 parent2">
              <div class="d-flex align-items-center vh-100">
                <div class="col col-lg-8 m-4">
                  <div class="text h-300 align-items-left justify-content-left text-left">
                    <h2>Here's Our</h2>
                    <h1 class="font-weight-bold varsity-text text-red">
                      ONLINE SHOP
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <a href="#footer" class="btn btn-danger">Go To Shop</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
