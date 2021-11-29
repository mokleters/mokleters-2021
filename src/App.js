import React from "react";
import { Routes, Route} from "react-router-dom";

import "./css/App.css";

import Home from "./pages/home";
import Links from "./pages/links";

export default class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/links' element={<Links/>}/>
      </Routes>
    )
  }
}
