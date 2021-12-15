import React from "react";
import '../../css/Footers.scoped.css';
import logo from '../../assets/footer/logo-mokleter-footer.png'
import ig from '../../assets/footer/ig.png'
import twt from '../../assets/footer/twt.png'
import tiktok from '../../assets/footer/tiktok.png'
import yt from '../../assets/footer/yt.png'

export default class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="bg-dark-cs h-20">
          <div class="container">
            <footer class="py-5">
              <div class="row">
                <div class="col-md-5 col-sm-12 mb-4">
                  <div class="d-flex align-items-center">
                    <a href="/" class="me-2 text-decoration-none lh-1">
                      <img src={logo}/>
                    </a>
                    <span class="mokleters-text">MOKLETERS</span>
                  </div>
                  <div className="my-4 text-desc-footer justify-content text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's  standard dummy text ever since  is simply dummy text of the printing Lorem Ipsum has been the industry's  standard dummy text ever since
                  </div>
                  <div>
                    <h5>Follow Us On:</h5>
                    <ul class="justify-content list-unstyled d-flex">
                      <li><a href="#"><img src={ig}/></a></li>
                      <li class="ms-3"><a href="#"><img src={twt}/></a></li>
                      <li class="ms-3"><a href="#"><img src={tiktok}/></a></li>
                      <li class="ms-3"><a href="#"><img src={yt}/></a></li>
                    </ul>
                  </div>
                </div>
              
                <div class="col col-md-2 offset-md-2 offset-1">
                  <h5 className="mb-3">Site Map</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item my-2"><a href="#organization" class="nav-link p-0 text-muted">Organization</a></li>
                    <li class="nav-item my-2"><a href="#bombi" class="nav-link p-0 text-muted">About Bombi</a></li>
                    <li class="nav-item my-2"><a href="#olshop" class="nav-link p-0 text-muted">Shop</a></li>
                    <li class="nav-item my-2"><a href="#blog" class="nav-link p-0 text-muted">Online Blog</a></li>
                  </ul>
                </div>

                <div class="col col-md-2">
                  <h5 className="mb-3">Contact</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item my-2"><a href="#" class="nav-link p-0 text-muted">Gmail</a></li>
                    <li class="nav-item my-2"><a href="#" class="nav-link p-0 text-muted">Yahoo</a></li>
                    <li class="nav-item my-2"><a href="#" class="nav-link p-0 text-muted">WhatsApp</a></li>
                  </ul>
                </div>

                <div class="col col-md-1">
                  <h5 className="mb-3">About</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item my-2"><a href="#" class="nav-link p-0 text-muted">About Us</a></li>
                    <li class="nav-item my-2"><a href="#" class="nav-link p-0 text-muted">Developers</a></li>
                  </ul>
                </div>
              </div>
              <div class="d-flex justify-content-between border-top pymy-custom">
                <p>&copy; Mokleters 2020-2021 | SMK Telkom Malang</p>
                <ul class="list-unstyled d-flex align-content-end flex-wrap">
                  <li class="ms-3"><a class="link-light" href="#">Report</a></li>
                  <span className="ms-3">|</span>
                  <li class="ms-3"><a class="link-light" href="#">Security & Privacy</a></li>
                  <span className="ms-3">|</span>
                  <li class="ms-3"><a class="link-light" href="#">Terms & Use</a></li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </section>
    );
  }
}
