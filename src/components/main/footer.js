import React from "react";
import "../../css/Footers.scoped.css";
import logo from "../../assets/footer/logo-mokleter-footer.png";
import ig from "../../assets/footer/ig.png";
import twt from "../../assets/footer/twt.png";
import tiktok from "../../assets/footer/tiktok.png";
import yt from "../../assets/footer/yt.png";

export default class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="bg-dark-cs h-20">
          <div class="container">
            <footer class="pt-5">
              <div class="row">
                <div class="col-md-5 mb-5">
                  <div class="d-flex align-items-center">
                    <a href="/" class="me-2 text-decoration-none lh-1">
                      <img src={logo} />
                    </a>
                    <span class="mokleters-text">MOKLETERS</span>
                  </div>
                  <div className="my-4 text-desc-footer justify-content">
                    Mokleters is a brand and a large community of all students
                    of SMK Telkom Malang as a place to express student
                    creativity and also accommodate all student activities from
                    organizations, communities, and also individuals. Mokleters
                    is also a bond formed to establish relationships between
                    students and graduates (Ikatan Alumni Wikusama) from SMK
                    Telkom Malang.
                  </div>
                  <div>
                    <h6>Follow Us On:</h6>
                    <ul class="justify-content list-unstyled d-flex">
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

                <div class="sitemap col offset-0">
                  <h6 className="mb-3">Site Map</h6>
                  <ul class="nav flex-column">
                    <li class="nav-item my-1">
                      <a href="#organization" class="nav-link p-0 text-muted">
                        Organization
                      </a>
                    </li>
                    <li class="nav-item my-1">
                      <a href="#bombi" class="nav-link p-0 text-muted">
                        About Bombi
                      </a>
                    </li>
                    <li class="nav-item my-1">
                      <a href="#olshop" class="nav-link p-0 text-muted">
                        Shop
                      </a>
                    </li>
                    <li class="nav-item my-1">
                      <a href="#blog" class="nav-link p-0 text-muted">
                        Online Blog
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="contact col">
                  <h6 className="mb-3">Contact</h6>
                  <ul class="nav flex-column">
                    <li class="nav-item my-1">
                      <a href="#" class="nav-link p-0 text-muted">
                        Gmail
                      </a>
                    </li>
                    <li class="nav-item my-1">
                      <a href="#" class="nav-link p-0 text-muted">
                        WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="about col">
                  <h6 className="mb-3">About</h6>
                  <ul class="nav flex-column">
                    <li class="nav-item my-1">
                      <a href="#" class="nav-link p-0 text-muted">
                        About Us
                      </a>
                    </li>
                    <li class="nav-item my-1">
                      <a href="#" class="nav-link p-0 text-muted">
                        Developers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="d-flex justify-content-between border-top py-3">
                <small class="text-muted">
                  &copy; Mokleters 2020-2021 | SMK Telkom Malang
                </small>
                <ul class="list-unstyled bot-foot d-flex align-content-end flex-wrap">
                  <li class="ms-3">
                    <a class="text-muted" href="#">
                      <small>Report</small>
                    </a>
                  </li>
                  <span className="ms-3 text-muted">|</span>
                  <li class="ms-3">
                    <a class="text-muted" href="#">
                      <small>Security & Privacy</small>
                    </a>
                  </li>
                  <span className="ms-3 text-muted">|</span>
                  <li class="ms-3">
                    <a class="text-muted" href="#">
                      <small>Terms & Use</small>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </section>
    );
  }
}
