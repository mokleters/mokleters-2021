import React from "react";

import "../../css/olshop-page.scoped.css";
import Image from "../../assets/olshop/dum.png";

export default class Olshop extends React.Component {
  constructor() {
    super()
    this.state = {
      isShow: false,
      showOn: "test",
      showOff: "test"
    }
  }
  render() {
    return (
      <section id="checkout">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="col bg-secondary h-75">
                <img src={Image} alt="Produk" className="image-fluid" />
              </div>
              <div className="row mt-3">
                <div className="col">
                  <img src={Image} alt="Produk" className="image-fluid" />
                </div>
                <div className="col">
                  <img src={Image} alt="Produk" className="image-fluid" />
                </div>
                <div className="col">
                  <img src={Image} alt="Produk" className="image-fluid" />
                </div>
                <div className="col">
                  <img src={Image} alt="Produk" className="image-fluid" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 pl-cs">
              <h1>Sweatshirt</h1>
              <small>Rp 150.000</small>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.</p>
              <div className="border-1 border-top border-bottom pt-3">
                <h5>Product Detail:</h5>
                <div className="col-4">
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <th scope="row">Size:</th>
                        <td>S, M, L, XL, XXL</td>
                      </tr>
                      <tr>
                        <th scope="row">Color:</th>
                        <td>
                          <ul class="list-group list-group-horizontal">
                            <li class="list-group-item mx-1 rounded-0 border-0" style={{background: "#D85252"}}></li>
                            <li class="list-group-item mx-1 rounded-0 border-0" style={{background: "#333333"}}></li>
                            <li class="list-group-item mx-1 rounded-0 border-0" style={{background: "#EDE8DC"}}></li>
                          </ul>
                        </td> 
                      </tr>
                      <tr>
                        <th scope="row">Category:</th>
                        <td>Fashion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {this.state.isShow === true ? (
                  <>
                    <small><a class="btn p-0 text-danger" onClick={() => this.setState({isShow: false})}><i class="fa fa-arrow-up"></i> See more...</a></small>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </p>
                  </>
                  ):(
                  <small><a class="btn p-0 text-danger" onClick={() => this.setState({isShow: true})}><i class="fa fa-arrow-down"></i> See more...</a></small>
                )}
              </div>
              <div className="col-3 my-2">
                <h5>Contact Us:</h5>
                <button className="btn btn-danger form-control p-0"><i class="fa fa-whatsapp"></i> Whatsapp</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}