import React from "react";
import img1 from '../assets/organization/osis.png';
import img2 from '../assets/organization/mpk.png';
import img3 from '../assets/organization/pustel.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import '../css/Organization.css';

//Menggunakan penamaan yang cukup unik seperti cardd
//Agar tidak ada tabrakan styling dengan yang lain

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div class="cardd" data-value="1">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={img1} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        OSIS
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </p>
      <span>learn more</span>
    </div>
  </div>,
  <div class="cardd" data-value="2">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={img2} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        MPK
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </p>
      <span>learn more</span>
    </div>
  </div>,
  <div class="cardd" data-value="3">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={img3} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        PUSTEL
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </p>
      <span>learn more</span>
    </div>
  </div>,
  <div class="cardd" data-value="4">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={img1} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        OSIS
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </p>
      <span>learn more</span>
    </div>
  </div>,
  <div class="cardd" data-value="5">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={img2} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        MPK
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </p>
      <span>learn more</span>
    </div>
  </div>,
  <div class="cardd" data-value="6">
    <div class="atas"></div>
    <div class="cardd-img">
      <img src={img3} alt="/" />
    </div>
    <div class="cardd-body">
      <h3>
        PUSTEL
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </p>
      <span>learn more</span>
    </div>
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    mouseTracking enabled
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
    autoPlay={true}
    autoPlayInterval={5000}
    infinite={true}

  />
);

export default class Organization extends React.Component {

  render() {
    return (
      <section id="organization">
        <div className="orga text-center pb-4">
          <h5>Check Out Our</h5>
          <div className="varsity-text text-red mb-5">ORGANIZATIONS</div>
        </div>

        <div class="containerr">
          <Carousel />
          <div class="backgroundd"></div>

        </div>
      </section>
    );
  }
}
