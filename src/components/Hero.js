import React from 'react';
import './../css/stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <div className="header">
    {/* Hero */}
    <hero>
        <div className="hero">
        <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-300 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-baseline">
                        <p className="subtitle">Dari Mokleter Untuk Mokleters</p>
                    <div class="align-self-end">
                        <h1 class="font-weight-bold">MOKLET<span>ERS</span></h1>
                    </div>                    
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
                        <button type="button" className="btn-explore rounded-pill">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    </hero>
    </div>
  );
}

export default Hero;
