import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cuisine">
        <Route path=":type" element={<Cuisine />} />
      </Route>
    </Routes>
  );
};

export default Pages;
