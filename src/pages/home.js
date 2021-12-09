import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Organization from "../components/Organization";
import Olshop from "../components/Online-shop";
import Blog from "../components/Blog";
import Joinus from "../components/Join-us";
import FooterBg from "../components/footer-bg";
import Footer from "../components/footer";
import Bombi from "../components/Bombi";

class Index extends React.Component {
  render() {
    return (
      <>
        {/* <h1 className="b-example-divider mb-0">PAGES: <Link to="/links">Pages links</Link> <Link to="/olshop">Pages Olshop</Link></h1> */}
        {/* <Navbar /> */}
        {/* <Hero /> */}
        {/* <About /> */}
        <Bombi/>
        <Organization />
        <Blog />
        {/* <Joinus /> */}
        <Olshop />
        <div className="full-page">
          <FooterBg/>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;