import React from "react";

import logo from "../assets/footer/logo-mokleter-footer.png";
import ig from "../assets/footer/ig.png";
import twt from "../assets/footer/twt.png";
import tiktok from "../assets/footer/tiktok.png";
import yt from "../assets/footer/yt.png";
import "../css/links.css";

export default class Links extends React.Component {
  render() {
    return (
      <div class="links">
        <div class="jumbotron d-flex align-items-center min-vh-100 bg-mokleters text-white">
          <div class="container d-flex justify-content-center pt-5 pb-5">
            <div className="col-sm-12 col-md-6 p-5 glass">
              <div class="d-flex justify-content-center mb-2 container-fluid">
                <a href="/" class="me-2 text-decoration-none lh-1">
                  <img src={logo} class="logo" />
                </a>
                <h2 class="mokleters-text">MOKLETERS</h2>
              </div>
              <a
                href="https://www.instagram.com/mokleters"
                className="btn btn-outline-light form-control my-3"
              >
                {" "}
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@mokleters"
                className="btn btn-outline-light form-control my-3"
              >
                TikTok
              </a>
              <a
                href="https://youtube.com/channel/UCn6nuvttPqWj3djvoxjzJlQ"
                className="btn btn-outline-light form-control my-3"
              >
                Youtube
              </a>
              <a
                href="https://mokleters.id/shop"
                className="btn btn-outline-light form-control my-3"
              >
                Website
              </a>
              <div className="text-center mt-4">
                <medium>Follow Us On:</medium>
                <ul class="justify-content-center list-unstyled d-flex">
                  <li>
                    <a href="https://www.instagram.com/mokleters">
                      <img src={ig} width="80%" />
                    </a>
                  </li>
                  <li class="ms-3">
                    <a href="https://www.tiktok.com/@mokleters">
                      <img src={tiktok} width="80%" />
                    </a>
                  </li>
                  <li class="ms-3">
                    <a href="https://youtube.com/channel/UCn6nuvttPqWj3djvoxjzJlQ">
                      <img src={yt} width="80%" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
