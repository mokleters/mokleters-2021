import React from "react";

import Navbar from "../components/main/Navbar-hitam";
import Checkout from "../components/olshop/Checkout";
import Footer from "../components/main/footer";

export default class OlshopDetail extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
        <Checkout/>
        <Footer/>
      </>
    );
  }
}
