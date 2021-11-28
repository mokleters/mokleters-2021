import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Organization from "../components/Organization";
import Olshop from "../components/Online-shop";
import Blog from "../components/Blog";
import Joinus from "../components/Join-us";
import Footer from "../components/footer";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <About />
        <Organization />
        <Olshop />
        <Blog />
        <Joinus />
        <Footer />
      </div>
    );
  }
}
