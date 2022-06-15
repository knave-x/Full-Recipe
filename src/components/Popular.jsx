import React from "react";
import { useEffect, useState } from "react";
const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=fe5e0844d264476598fde829503a819c&number=9`
    );

    const data = await api.json();
    console.log("data :", data);
    setPopular(data.recipes);
  };

  return (
    <div>
      {popular.map((recipe, i) => {
        return (
          <div key={i}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
