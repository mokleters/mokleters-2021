import React from "react";

import "../../css/olshop-page.scoped.css";
import Image1 from "../../assets/olshop/tshirt-hitam-front.jpg";
import Image2 from "../../assets/olshop/tshirt-hitam-back.jpg";

export default class Olshop extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      showOn: "test",
      showOff: "test",
      front: true,
    };
  }
  render() {
    return (
      <section id="checkout">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="col bg-white">
                {this.state.front === true ? (
                  <img src={Image1} alt="Produk" className="image-fluid" />
                ) : (
                  <img src={Image2} alt="Produk" className="image-fluid" />
                )}
              </div>
              <div className="row mt-3">
                <div className="col i">
                  <img
                    src={Image1}
                    alt="Produk"
                    className="image-fluid"
                    width="70%"
                    type="button"
                    onClick={() => this.setState({ front: true })}
                  />
                </div>
                <div className="col i">
                  <img
                    src={Image2}
                    alt="Produk"
                    className="image-fluid"
                    width="70%"
                    type="button"
                    onClick={() => this.setState({ front: false })}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 pl-cs">
              <h1 class="product-title">MCMXCII T-Shirt</h1>
              <h3>
                <bold>Rp 99.000</bold>
              </h3>
              <p class="product-description">
                one heart, one way and one dream, holding hands together waving
                the flag of passion. from small steps to eternal dreams, from a
                voice to a great unity. Her passion and dreams carry a fire of
                hope for the future. And what is the story today will become
                history at the end of the day
              </p>
              <div className="border-1 border-top border-bottom pt-3">
                <h5>Product Detail:</h5>
                <div>
                  <table class="table table-borderless">
                    <tbody>
                      <tr width="100%">
                        <th width="10%" scope="row">
                          Size:
                        </th>
                        <td width="90%">
                          <b>S</b> | <b>M</b> | <b>L</b> | <b>XL</b>
                        </td>
                      </tr>
                      <tr width="100%">
                        <th width="10%" scope="row">
                          Color:
                        </th>
                        <td width="90%">
                          <ul class="list-group list-group-horizontal">
                            <li
                              class="list-group-item mx-1 rounded-0 border-0"
                              style={{ background: "rgb(10, 10, 10)" }}
                            />
                          </ul>
                        </td>
                      </tr>
                      <tr width="10">
                        <th width="10%" scope="row">
                          Category:
                        </th>
                        <td width="90%">T-Shirt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {this.state.isShow === true ? (
                  <>
                    <small>
                      <a
                        class="btn p-0 text-danger"
                        onClick={() => this.setState({ isShow: false })}
                      >
                        <i class="fa fa-arrow-up" /> See more...
                      </a>
                    </small>
                    <p>Material: Cotton Combed 24s</p>
                  </>
                ) : (
                  <small>
                    <a
                      class="btn p-0 text-danger"
                      onClick={() => this.setState({ isShow: true })}
                    >
                      <i class="fa fa-arrow-down" /> See more...
                    </a>
                  </small>
                )}
              </div>
              <div className="col-3 my-2">
                <h5>Order:</h5>
                <button className="btn order btn-danger form-control p-0">
                  <a
                    class="order-button"
                    href="https://api.whatsapp.com/send?phone=6281234868146&text=Hi%2C%20Saya%20Mau%20Order%20T-Shirt%20Mokleters%20%21"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <i class="fa fa-whatsapp" />
                    <span> Whatsapp</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
