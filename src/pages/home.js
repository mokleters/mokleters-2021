import React from "react";
import {Link} from "react-router-dom";
// import Navbar from "../components/main/Navbar";
import Hero from "../components/main/Hero";
import About from "../components/main/About";
import Organization from "../components/main/Organization";
import Olshop from "../components/main/Online-shop";
import Blog from "../components/main/Blog";
// import Joinus from "../components/main/Join-us";
import FooterBg from "../components/main/footer-bg";
import Footer from "../components/main/footer";
import Bombi from "../components/main/Bombi";
import Quotes from "../components/main/Quotes";

class Index extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">
          <Link to="/links">Pages links</Link> |
          <Link to="/olshop">Pages Olshop</Link> | 
          <Link to="/checkout">Pages Olshop-detail</Link> | 
          <a href="#hero">hero</a> | 
          <a href="#about">about</a> | 
          <a href="#bombi">bombi</a> | 
          <a href="#organization">organization</a> | 
          <a href="#blog">blog</a> | 
          <a href="#footer">footer</a>
        </h1> */}
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Quotes />
        <Bombi />
        <Organization />
        <Blog />
        {/* <Joinus /> */}
        <Olshop />
        <div className="full-page bg-dark-cs">
          <FooterBg />
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;