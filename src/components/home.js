import axios from "axios";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Home = () => {
  const [fetchRecipe, setFetchRecipe] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8070/recipe").then((response) => {
      setFetchRecipe(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to Recipe Collections</h1>
      <div>
        {fetchRecipe.map((recipe) => {
          return (
            <div className="recipeCard">
              <h1>{recipe.recipeName}</h1>
              <p>Ingredents : {recipe.ingredents}</p>
              <p>Description : {recipe.description}</p>
              <Stack spacing={2} direction="row">
                <Button variant="contained" size="small">
                  Delete
                </Button>
                <Button variant="contained" size="small">
                  Edit
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
