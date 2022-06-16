import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=fe5e0844d264476598fde829503a819c&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    //getCuisine("italian");
    console.log("params : ", params.type);
    //console.log("denemee", data);
  }, [params.type]);

  return <div></div>;
};

export default Cuisine;
