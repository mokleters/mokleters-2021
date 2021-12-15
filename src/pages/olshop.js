import React from "react";

import Main from "../components/olshop/Main";

import Footer from "../components/main/footer";
import Hero_Olshop from "../components/olshop/Hero-olshop";

export default class Olshop extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">Olshop Page</h1> */}
        <Hero_Olshop/>
        <Main/>
        <Footer/>
      </>
    );
  }
}
