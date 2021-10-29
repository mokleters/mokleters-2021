import React from 'react';
import './../css/stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../images/logo.png';
function Footer(){
    return(
    // <!-- Footer -->
    <div className="footer-all">
    <footer class="text-center text-lg-start bg-light text-muted">

    {/* <!-- Section: Links  --> */}
    <section class="">
        <div class="container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div class="row mt-3">

            {/*<!-- Grid column --> */}
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 class="text-uppercase fw-bold mb-4">
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
            <h6 class="text-uppercase fw-bold mb-4">
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
            <h6 class="text-uppercase fw-bold mb-4">
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
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* <!-- Content --> */}
            <h6 class="text-uppercase fw-bold mb-4">
            Company name
            </h6>
            <i class="fas fa-gem me-3"><img src={logo} className="App-logo" alt="logo" width="60%" height="20%"></img></i>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            </p>
            </div>
            {/* <!-- Grid column -->*/}
        </div>
        {/* <!-- Grid row --> */}
        </div>
    </section>
    {/* <!-- Section: Links  --> */}

    {/* <!-- Copyright --> */}
    <div class="text-center p-4">
        © 2021 Copyright : 
        <a class="text-reset fw-bold" href="/"> Mokleters 2021 - Forever</a>
    </div>
    {/* <!-- Copyright --> */}
    </footer>
    </div>
// <!-- Footer -->
    );
}

export default Footer;