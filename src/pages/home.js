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