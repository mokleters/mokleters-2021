import React from "react";

import "../../css/olshop-page.scoped.css";
import tshirt from "../../assets/olshop/tshirt-hitam-front.jpg";

export default class Olshop extends React.Component {
  render() {
    return (
      <section id="product">
        <div className="container">
          <div className="col-12 text-center my-5">
            <h1 className="mb-3" style={{ fontFamily: "Varsity" }}>
              FIND YOUR <span className="text-red">STYLE</span>
            </h1>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem
              <br /> Ipsum has been the industry's standard dummy text ever
              since
            </p> */}
            <div class="d-flex justify-content-center h-100">
              <div class="searchbar">
                <input
                  class="search_input"
                  type="text"
                  placeholder="Search..."
                />
                <a href="#" class="search_icon">
                  <i class="fa fa-search" />
                </a>
              </div>
            </div>
            <div class="mt-5 py-1">
              <div class="row row-cols-2 row-cols-lg-3">
                <div class="col">
                  <div class="card">
                    <a href="/checkout">
                      <img
                        class="card-img-top img-fluid"
                        src={tshirt}
                        alt="tshirt"
                        width="301px"
                        height="314px"
                      />
                    </a>
                    <div class="card-body">
                      <a href="/checkout" style={{ textDecoration: "none" }}>
                        <p
                          class="card-text"
                          style={{ fontFamily: "Bebas Neue", fontSize: "25px" }}
                        >
                          MCMXCII T-SHIRT <br />
                          <bold>
                            <span style={{ fontFamily: "Montserrat" }}>
                              Rp 99.000
                            </span>
                          </bold>
                        </p>
                      </a>
                    </div>
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
