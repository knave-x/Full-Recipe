import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cuisine">
        <Route path=":type" element={<Cuisine />} />
      </Route>
      <Route path="searched" >
        <Route path=":search" element={<Searched/>} /> 
      </Route>
    </Routes>
  );
};

export default Pages;
