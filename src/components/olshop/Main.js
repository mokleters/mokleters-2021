import React from "react";

import "../../css/olshop-page.scoped.css";

export default class Olshop extends React.Component {
  
  render() {
    return (
      <section id="olshop">
        <div className="container">
            <div className="col-12 text-center my-5">
                <h1 className="varsity-text">FIND YOUR <span className="text-red">STYLE</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    <br /> Ipsum has been the industry's  standard dummy text ever since</p>
                <div class="d-flex justify-content-center h-100">
                    <div class="searchbar">
                        <input class="search_input" type="text" placeholder="Search..."/>
                        <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}