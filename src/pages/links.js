import React from "react";

import logo from '../assets/footer/logo-mokleter-footer.png'
import ig from '../assets/footer/ig.png'
import twt from '../assets/footer/twt.png'
import tiktok from '../assets/footer/tiktok.png'
import yt from '../assets/footer/yt.png'

export default class Links extends React.Component {
  render() {
    return (
      <>
        <div class="jumbotron d-flex align-items-center min-vh-100 bg-mokleters text-white">
          <div class="container d-flex justify-content-center">
          <div className="col-sm-12 col-md-6 p-5 glass my-5">
              <div class="d-flex justify-content-center mb-3">
                <a href="/" class="me-2 text-decoration-none lh-1">
                  <img src={logo}/>
                </a>
                <span class="mokleters-text">MOKLETERS</span>
              </div>
              <a href="#" className="btn btn-outline-light form-control my-3 shake">Follow Instagram</a>
              <a href="#" className="btn btn-outline-light form-control my-3">Follow Instagram</a>
              <a href="#" className="btn btn-outline-light form-control my-3">Follow Instagram</a>
              <a href="#" className="btn btn-outline-light form-control my-3">Follow Instagram</a>
              <a href="#" className="btn btn-outline-light form-control my-3">Follow Instagram</a>
              <a href="#" className="btn btn-outline-light form-control my-3">Follow Instagram</a>
              <div className="text-center mt-4">
                <h5>Follow Us On:</h5>
                <ul class="justify-content-center list-unstyled d-flex">
                  <li><a href="#"><img src={ig}/></a></li>
                  <li class="ms-3"><a href="#"><img src={twt}/></a></li>
                  <li class="ms-3"><a href="#"><img src={tiktok}/></a></li>
                  <li class="ms-3"><a href="#"><img src={yt}/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
