import React from "react";
import '../../css/Join-us.scoped.css'
import image from "../../assets/joinus/image.png";
import cc from "../../assets/joinus/cc.png";
import bc from "../../assets/joinus/bc.png";
import dev from "../../assets/joinus/dev.png";
import wat from "../../assets/joinus/wat.png";

export default class Joinus extends React.Component {
  render() {
    return (
      <section id="join-us">
        {/* <h1 className="b-example-divider mb-0">Join-us section</h1> */}
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7 col-12">
              <div className="mt-1 border-top border-dark col-1"></div>
              <h5>Come and</h5>
              <h3 className="varsity-text"><span className="text-red">JOIN</span> US</h3>
              <p className="col-8 text-desc">"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
              <div className="row">
                <div className="col-md-6 col-12 my-3">
                  <div class="card">
                    <div class="card-body">
                      <a className="text-decoration-none text-dark" href="#">
                      <img className="mb-4" src={cc}/>
                      <h5 class="card-title">Content Creator</h5>
                      <p class="card-text">Lorem Ipsum is simply dummy industry. Lorem Ipsum</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 my-3">
                  <div class="card card-active">
                    <div class="card-body">
                      <a className="text-decoration-none text-dark" href="#">
                      <img className="mb-4" src={dev}/>
                      <h5 class="card-title">Development</h5>
                      <p class="card-text">Lorem Ipsum is simply dummy industry. Lorem Ipsum</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 my-3">
                  <div class="card">
                    <div class="card-body">
                      <a className="text-decoration-none text-dark" href="#">
                      <img className="mb-4" src={wat}/>
                      <h5 class="card-title">Work As a Team</h5>
                      <p class="card-text">Lorem Ipsum is simply dummy industry. Lorem Ipsum</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 my-3">
                  <div class="card">
                    <div class="card-body">
                      <a className="text-decoration-none text-dark" href="#">
                      <img className="mb-4" src={bc}/>
                      <h5 class="card-title">Be Creative</h5>
                      <p class="card-text">Lorem Ipsum is simply dummy industry. Lorem Ipsum</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 mb-3 mb-md-0">
                  <a href="#join-us" class="btn btn-danger form-control">Join Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12">
              <img src={image}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
