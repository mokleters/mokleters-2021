import React from 'react';
import './../css/stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../images/logo.png';
function Footer(){
    return(
    // <!-- Footer -->
    <div className="footer-all">
    <footer class="text-center text-lg-start text-muted">

    {/* <!-- Section: Links  --> */}
    <section>
        <div class="container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div class="isi-footer row mt-3">

            {/*<!-- Grid column --> */}
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 class="fw-bold mb-5">
                Follow Us On
            </h6>
            <p>
                <a href="/" class="text-reset">Instagram</a>
            </p>
            <p>
                <a href="/" class="text-reset">Twitter</a>
            </p>
            <p>
                <a href="/" class="text-reset">Facebook</a>
            </p>
            <p>
                <a href="/" class="text-reset">Youtube</a>
            </p>
            </div>
            {/* <!-- Grid column -->

            <!-- Grid column --> */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 class="fw-bold mb-5">
                Contact Us
            </h6>
            <p>
                <a href="/" class="text-reset">Gmail</a>
            </p>
            <p>
                <a href="/" class="text-reset">Company Number</a>
            </p>
            <p>
                <a href="/" class="text-reset">Our Marketing</a>
            </p>           
            </div>
            {/* <!-- Grid column -->

            <!-- Grid column --> */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 class="fw-bold mb-5">
                About Us
            </h6>
            <p>
                <a href="/" class="text-reset">About Us</a>
            </p>
            <p>
                <a href="/" class="text-reset">Company's Portfolio</a>
            </p>
            </div>
            
            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-4 col-xl-5 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="fw-bold mb-5">
                Present by:
                </h6>
                <i class="fas fa-gem me-3"><img src={logo} className="App-logo" alt="logo" width="50%" height="18%"></img></i>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    </p>
            </div>
            {/* <!-- Grid column -->*/}
        </div>
        {/* <!-- Grid row --> */}
        </div>
    </section>
    {/* <!-- Section: Links  --> */}

    {/* <!-- Copyright --> */}
    <copyright className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-5">
        <div className="text-reset d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark">
          Mokleters 2021-Selamanya
        </div>
  
        <div className="text-reset col-md-5 text-end">
            <a href="/">Report</a> | <a href="/">Security & Privacy</a> | <a href="/">Terms & Use</a>
        </div>
      </copyright>
    {/* <!-- Copyright --> */}
    </footer>
    </div>
// <!-- Footer -->
    );
}

export default Footer;