import React from "react";
import { Routes, Route} from "react-router-dom";

import "./css/App.css";

import Home from "./pages/home";
import Links from "./pages/links";
import Olshop from "./pages/olshop";

export default class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/links' element={<Links/>}/>
        <Route path='/olshop' element={<Olshop/>}/>
      </Routes>
    )
  }
}
