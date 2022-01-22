import axios from "axios";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();
  const [fetchRecipe, setFetchRecipe] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8070/recipe").then((response) => {
      setFetchRecipe(response.data);
      console.log(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8070/recipe/delete/${id}`)
      .then((response) => {
        alert("Recipe Deleted");
        axios.get("http://localhost:8070/recipe").then((response) => {
          setFetchRecipe(response.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleDelete(recipe._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    history("/edit/:id", { state: recipe });
                  }}
                >
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
