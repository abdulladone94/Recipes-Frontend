import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

export default function AddRecipe() {
  const [recipe, setRecipe] = React.useState({
    recipeName: "",
    ingredents: "",
    description: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleRecipeInputs = (e) => {
    e.preventDefault();

    const newRecipe = {
      recipeName: recipe.recipeName,
      ingredents: recipe.ingredents,
      description: recipe.description,
    };
    axios
      .post("http://localhost:8070/recipe/add", newRecipe)
      .then(() => {
        alert("Recipe Added");
      })
      .catch((err) => {
        alert(err);
      });
    setRecipe({ recipeName: "", ingredents: "", description: "" });
  };

  return (
    <form onSubmit={handleRecipeInputs}>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
          display: "inline-grid",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Recipe Name"
          variant="standard"
          name="recipeName"
          value={recipe.recipeName}
          required
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          label="Ingredents"
          variant="standard"
          name="ingredents"
          value={recipe.ingredents}
          required
          onChange={handleChange}
        />
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="standard"
          name="description"
          value={recipe.description}
          required
          onChange={handleChange}
        />
        <Button variant="contained" disableElevation type="submit">
          submit
        </Button>
      </Box>
    </form>
  );
}
