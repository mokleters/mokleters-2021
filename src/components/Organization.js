import React from "react";
import '../css/Organization.css';
import img1 from '../assets/organization/osis.png';
import img2 from '../assets/organization/mpk.png';
import img3 from '../assets/organization/pustel.png'

export default class Organization extends React.Component {
  
  render() {
    return (      
      <section id="organization">        
        <div className="orga text-center pb-4">
          <h5>Check Out Our</h5>
          <div className="varsity-text text-red mb-5">ORGANIZATIONS</div>               
        </div>
        <div class="containerr">
          <div class="cardd">
            <div class="atas"></div>
            <div class="cardd-img">
              <img src={img1} alt="/"/>
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
          </div>
          <div class="cardd">
            <div class="atas"></div>
            <div class="cardd-img">
              <img src={img2} alt="/"/>
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
          </div>
          <div class="cardd">
            <div class="atas"></div>
            <div class="cardd-img">
              <img src={img3} alt="/"/>
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
          </div>

          <div class="backgroundd"></div>

        </div>
      </section>
    );
  }
}
