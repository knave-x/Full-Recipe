import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Searched = () => {
  const [searchedRecipes, setSearchRecipes] = useState([]);
  var { search } = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=fe5e0844d264476598fde829503a819c&query=${name}`
    );
    const recipes = await data.json();
    console.log("yyyyy");
    setSearchRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(search);
  }, [search]);

  return (
    <Grid>
      {searchedRecipes.map((item, i) => {
        return (
          <Card key={i}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-rap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
