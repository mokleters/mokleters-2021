import React from "react";
import "../../css/Hero-olshop.scoped.css";

import bg from "../../assets/olshop/bg-hero.png";
import Navbar from "../main/Navbar-olshop";

export default class Hero extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Hero section</h1> */}
        <section class="hero">
          <Navbar />
          <img class="vh-100" src={bg}/>
          <div class="content">
            <div class="d-flex align-items-center">
              <div class="container d-flex justify-content-center text-center">
                <div className="col d-block">
                  <h1 class="varsity-text">
                    ONLINE<span> SHOP</span>
                  </h1>
                  <p className="text-center">“Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's <br/> standard dummy text ever since.”</p>
                </div>  
                <a href="#olshop">
                  <i class="arrow fas fa-gem me-3"></i>      
                </a>
              </div>
            </div>
          </div>
        </section>    
      </>
    );
  }
}
