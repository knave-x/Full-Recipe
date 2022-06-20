import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="cuisine">
          <Route path=":type" element={<Cuisine />} />
        </Route>

        <Route path="searched">
          <Route path=":search" element={<Searched />} />
        </Route>

        <Route path="recipe">
          <Route path=":name" element={<Recipe />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
